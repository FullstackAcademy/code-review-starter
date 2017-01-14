const NodeGit = require('nodegit');

const Promise = require('bluebird');
const routeTable = require('./route-table')
const fs = Promise.promisifyAll(require("fs"));
const { join } = require('path');
const { exec } = require('child-process-promise');
const basePath = process.cwd() + '/.tmp';
const dt = Date.now();
const sequelizeErd = require('sequelize-erd');
const { generateGraph } = require('./barChart');
const { lint } = require('./linter');
const notifier = require('node-notifier');
const clipboardy = require('clipboardy');
const svgToPng = require('svg-to-png')

const formatLintMessage = message => {
  if(message.severity === 2) {
    return '**' + message.message + '**'
  }
  return message.message
}

const lintMessage = (repoUrl, path, commit, linterOutput) =>
  linterOutput.messages.map(message =>
    `    - [ ] [${message.line}](${repoUrl}/tree/${commit}/${path}#L${message.line}): ${formatLintMessage(message)}`
  )
  .join('\n')

const makeFileLink = (repoUrl, path, commit, localRepoPath) => {
  const fullFilePath = join(localRepoPath, path);
  const stats = fs.lstatSync(fullFilePath);
  if (!stats.isFile()) { return; }
  const lintResult = lint(fs.readFileSync(fullFilePath, 'utf8'));
  const fileparts = path.split('/');
  const filename = fileparts[fileparts.length-1];
  return `- [${filename}](${repoUrl}/tree/${commit}/${path})
  - Linter
${lintMessage(repoUrl, path, commit, lintResult)}

  - Human Review
`
}

const excludeList = [
  'Jokes.jsx',
  'Jokes.test.jsx',
  'auth.js'
];

const directories = {
  models: 'db/models',
  routes: 'server',
  reducers: 'app/reducers',
  components: 'app/components'
}

function getAllFiles(dir, fileLists, basePaths) {
  return Object.values(fileLists)
    .map((dirList, i) => dirList.map(localPath => join(Object.values(basePaths)[i], localPath)))
    .reduce((list, current) => [...list, ...current], [])
    .map(filePath => join(dir, filePath));
}


async function review(repoUrl) {
  const directoryFileLists = {};
  const localRepoPath = basePath + '/' + dt;
  const makeFileForRepo = makeFileLink.bind(null, repoUrl);

  function printDir(dir, files, commit) {
    return files.map(file => makeFileForRepo(join(dir,file), commit, localRepoPath)).join('\n')
  }

  function printDirs(dirs, commit) {
    let toReturn = '';
    for(const type of Object.keys(dirs)) {
      toReturn += `### ${type}\n\n`;
      toReturn += printDir(directories[type], dirs[type], commit) + '\n\n';
    }
    return toReturn;
  } 



  await NodeGit.Clone.clone(repoUrl, localRepoPath);
  await exec(`cd ${localRepoPath} && yarn install`);
  fs.writeFileSync(`${localRepoPath}/ERD.svg`, sequelizeErd(localRepoPath + '/db/index.js'))
  await svgToPng.convert(`${localRepoPath}/ERD.svg`, `${localRepoPath}/ERD.png`, {
    width: '600px'
  })
  let npmCheck;
  try {
    await exec(`cd ${localRepoPath} && npm-check --no-emoji`)
  } catch(e) {
    npmCheck = e.stdout
      .split('\n')
      .filter(line => line.includes('NOTUSED'))
      .join('\n');
  }
  const repo = await NodeGit.Repository.open(localRepoPath);
  const commit = await repo.getBranchCommit("master");
  const id = commit.id();

  for (key of Object.keys(directories)) {
    try {
      directoryFileLists[key] = await fs.readdirAsync(join(localRepoPath, directories[key]));
    } catch(e) {
      console.warn('cannot find directory', directories[key]);
    }
    directoryFileLists[key] = directoryFileLists[key]
      .filter(fileName => !excludeList.some(exclude => fileName.includes(exclude)))
  }
  
  const graph = generateGraph(localRepoPath, getAllFiles(localRepoPath, directoryFileLists, directories));

  const message = `# Code Review

## npm-check
\`\`\`
${npmCheck}
\`\`\`

## SQL

## Files

${graph}


${printDirs(directoryFileLists, id)}

## Route Tree
\`\`\`  
${routeTable(localRepoPath + '/server/start.js')}
\`\`\`
`;

  clipboardy.writeSync(message);
  
  notifier.notify({
    title: 'Code Review Starter Done',
    message: 'Results are on your clipboard!'
  });

}


review(process.argv[2])
  .catch(err => {
    console.error(err, err.stack)
  })

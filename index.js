const NodeGit = require('nodegit');

const Promise = require('bluebird');
const routeTable = require('./route-table')
const fs = Promise.promisifyAll(require('fs'));
const { join } = require('path');
const { exec } = require('child-process-promise');
const basePath = process.cwd() + '/.tmp';
const dt = Date.now();
const sequelizeErd = require('sequelize-erd');
const { generateGraph } = require('./barChart');
const { lint } = require('./linter');
const notifier = require('node-notifier');
const clipboardy = require('clipboardy');
const svgToPng = require('svg-to-png');
const npmChecker = require('./npm-check');

const formatLintMessage = message => {
  // if(message.severity === 2) {
  //   return '**' + message.message + '**'
  // }
  return message.message
}

const lintMessage = (repoUrl, path, commit, linterOutput) =>
  linterOutput.messages
    .filter(message => message.severity > 1)
    .map(message =>
    `  [ ] [${message.line}](${repoUrl}/tree/${commit}/${path}#L${message.line}): ${formatLintMessage(message)}`
  )
  .join('\n')

const makeFileLink = (repoUrl, path, commit, localRepoPath) => {
  const fullFilePath = join(localRepoPath, path);
  const stats = fs.lstatSync(fullFilePath);
  if (!stats.isFile()) { return; }
  const lintResult = lint(fs.readFileSync(fullFilePath, 'utf8'));
  const fileparts = path.split('/');
  const filename = fileparts[fileparts.length-1];
  return `#### [${filename}](${repoUrl}/tree/${commit}/${path})
${lintMessage(repoUrl, path, commit, lintResult)}

`
}




function getAllFiles(dir, fileLists, basePaths) {
  return Object.values(fileLists)
    .map((dirList, i) => dirList.map(localPath => join(Object.values(basePaths)[i], localPath)))
    .reduce((list, current) => [...list, ...current], [])
    .map(filePath => join(dir, filePath));
}


async function review(repoUrl) {
  const localRepoPath = basePath + '/' + dt;
  await NodeGit.Clone.clone(repoUrl, localRepoPath);
  let config;
  try {
    config = require(join(localRepoPath, '.code-review-config'));
  } catch (error) {
    config = require('./defaultConfig');
  }

  const directoryFileLists = {};
  const makeFileForRepo = makeFileLink.bind(null, repoUrl);

  function printDir(dir, files, commit) {
    return files.map(file => makeFileForRepo(join(dir,file), commit, localRepoPath)).join('\n')
  }

  function printDirs(dirs, commit) {
    let toReturn = '';
    for (const type of Object.keys(dirs)) {
      toReturn += `### ${type}\n\n`;
      toReturn += printDir(config.directories[type], dirs[type], commit) + '\n\n';
    }
    return toReturn;
  } 


  await exec(`cd ${localRepoPath} && npm install`);
  const npmCheck = await npmChecker(localRepoPath);

  fs.writeFileSync(`${localRepoPath}/ERD.svg`, sequelizeErd(join(localRepoPath, config.dbInstance)))
  await svgToPng.convert(`${localRepoPath}/ERD.svg`, `${localRepoPath}/ERD.png`, {
    width: '600px'
  })
  
  const repo = await NodeGit.Repository.open(localRepoPath);
  const commit = await repo.getBranchCommit('master');
  const id = commit.id();

  const storePath = join(localRepoPath, config.reduxStore);
  const reduxJson = await require('./redux-initial-state')(storePath);

  for (const key of Object.keys(config.directories)) {
    try {
      directoryFileLists[key] = await fs.readdirAsync(join(localRepoPath, config.directories[key]));
    } catch (error) {
      console.warn('cannot find directory', config.directories[key]);
    }
    directoryFileLists[key] = directoryFileLists[key]
      .filter(fileName => !config.exclude.some(exclude => fileName.includes(exclude)))
  }
  
  const graph = generateGraph(localRepoPath, getAllFiles(localRepoPath, directoryFileLists, config.directories));
  await exec(`rm -rf ${join(localRepoPath, 'node_modules')}`)
  const message = `# Code Review

## npm-check
\`\`\`
${npmCheck}
\`\`\`

## SQL

## redux

\`\`\`
${reduxJson}
\`\`\`

## Files

${graph}


${printDirs(directoryFileLists, id)}
`;

  clipboardy.writeSync(message);
  
  notifier.notify({
    title: 'Code Review Starter Done',
    message: 'Results are on your clipboard!'
  });

}


review(process.argv[process.argv.length - 1])
  .catch(err => {
    console.error(err, err.stack)
  })

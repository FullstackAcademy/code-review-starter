const { exec } = require('child-process-promise');
module.exports = async dir => {
  let npmCheck;
  try {
    await exec(`cd ${dir} && npm-check --no-emoji`)
  } catch (error) {
    npmCheck = error.stdout
      .split('\n')
      .filter(line => line.includes('NOTUSED'))
      .join('\n');
  }
  return npmCheck;
}
var CLIEngine = require("eslint").CLIEngine;



exports.lint = text => {
  var cli = new CLIEngine({
    plugins: ['react'],
    // useEslintrc: false
  });
  return cli.executeOnText(text).results[0];
}
const { join } = require('path');
const { readFileSync } = require('fs');

const max = arr =>
  Math.max(...arr);

const maxLen = strings =>
  max(strings.map(str => str.length));

rightPad = (input, n) =>
  input + " ".repeat(n);


const graph = (renderMax, data) => {
  const labels = Object.keys(data)
    .map((label, i, labels) => rightPad(label, maxLen(labels) - label.length))

  const values = Object.values(data)
    .map((datum, i, allDatums) => (datum / max(allDatums)) * renderMax)
  let toReturn = '```\n';

  labels.forEach((label, i) => {
    toReturn += label + ' ' + '░'.repeat(values[i]) + '\n';
  })

  return toReturn + '\n```\n';
}

exports.generateGraph = (dir, files) => {
  const data = files
    .reduce((obj, filePath) => {
      try {
        obj[filePath.replace(dir, '')] = readFileSync(filePath, 'utf8').split('\n').length;
      } catch(e) {}
      return obj;
    }, {});

  return graph(28, data);
}
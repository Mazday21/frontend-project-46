#!/usr/bin/env node
import { program } from 'commander';
import parsingFile from './src/parseFromFile.js';

function compare(obj1, obj2) {
  const result = {};
  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  const sortedKeys = Array.from(keys).sort();

  sortedKeys.forEach((key) => {
    const hasKey1 = Object.prototype.hasOwnProperty.call(obj1, key);
    const hasKey2 = Object.prototype.hasOwnProperty.call(obj2, key);

    if (hasKey1 && !hasKey2) {
      result[`- ${key}`] = obj1[key];
    } else if (!hasKey1 && hasKey2) {
      result[`+ ${key}`] = obj2[key];
    } else if (hasKey1 && hasKey2 && obj1[key] !== obj2[key]) {
      result[`- ${key}`] = obj1[key];
      result[`+ ${key}`] = obj2[key];
    } else if (hasKey1 && hasKey2) {
      result[`  ${key}`] = obj1[key];
    }
  });
  return result;
}

function objectToString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
}

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const arrObjs = parsingFile(filepath1, filepath2, options.format);
    const differences = compare(arrObjs[0], arrObjs[1]);
    console.log(objectToString(differences));
  });

program.parse(process.argv);

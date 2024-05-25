#!/usr/bin/env node
import { program } from 'commander';
import parsingFile from './src/parseFromFile.js';
import objectToString from './src/objectToString.js';
import compareObjects from './src/compareObjects.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const arrObjs = parsingFile(filepath1, filepath2, options.format);
    const differences = compareObjects(arrObjs[0], arrObjs[1]);
    console.log(objectToString(differences));
  });

program.parse(process.argv);

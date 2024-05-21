#!/usr/bin/env node
import { program } from 'commander';
import parsingFile from './src/parseFromFile.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const arrStrs = parsingFile(filepath1, filepath2, options.format);
    console.log(arrStrs[0], arrStrs[1]);
  });

program.parse(process.argv);

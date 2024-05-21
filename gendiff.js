#!/usr/bin/env node
import { program } from 'commander';

program
  .version("1.0.0")
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    // Здесь будет логика сравнения файлов и вывода разницы
    // Вы можете использовать options.format для доступа к выбранному формату
    console.log(`Comparing ${filepath1} and ${filepath2} in format ${options.format}`);
  });

program.parse(process.argv);
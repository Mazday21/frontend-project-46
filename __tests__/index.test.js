import fs from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import gendiff from '../src/index.js';

const absolutePath = (filePath) => {
  const currentDir = cwd();
  return resolve(currentDir, filePath);
};

const readFile = (filename) => fs.readFileSync(absolutePath(filename), 'utf-8');

test('gendiff JSON', () => {
  const file1 = absolutePath('./__fixtures__/file1.json');
  const file2 = absolutePath('./__fixtures__/file2.json');
  const expected = readFile('./__fixtures__/result.txt');

  expect(gendiff(file1, file2)).toEqual(expected);
});

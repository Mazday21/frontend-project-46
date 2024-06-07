import fs from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import gendiff from '../src/index.js';

const absolutePath = (filePath) => {
  const currentDir = cwd();
  return resolve(currentDir, filePath);
};

const readFile = (filename) => fs.readFileSync(absolutePath(filename), 'utf-8');

const file1JSON = absolutePath('./__fixtures__/file1.json');
const file2JSON = absolutePath('./__fixtures__/file2.json');
const file1YML = absolutePath('./__fixtures__/file1.yml');
const file2YML = absolutePath('./__fixtures__/file2.yml');
const resultStylish = readFile('./__fixtures__/result.txt');

test('JSON to str formatted', () => {
  expect(gendiff(file1JSON, file2JSON)).toEqual(resultStylish);
});

test('YML to str formatted', () => {
  expect(gendiff(file1YML, file2YML)).toEqual(resultStylish);
});

test('plain', () => {
  const resultPlain = readFile('./__fixtures__/resultPlain.txt');

  expect(gendiff(file1JSON, file2JSON, 'plain')).toEqual(resultPlain);
});

test('JSON', () => {
  const resultJSON = readFile('./__fixtures__/resultJSON.txt');

  expect(gendiff(file1JSON, file2JSON, 'json')).toEqual(resultJSON);
});

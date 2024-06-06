import fs from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import gendiff from '../src/index.js';

const absolutePath = (filePath) => {
  const currentDir = cwd();
  return resolve(currentDir, filePath);
};

const readFile = (filename) => fs.readFileSync(absolutePath(filename), 'utf-8');

test('JSON to str formatted', () => {
  const file1 = absolutePath('./__fixtures__/file1.json');
  const file2 = absolutePath('./__fixtures__/file2.json');
  const expected = readFile('./__fixtures__/result.txt');

  expect(gendiff(file1, file2)).toEqual(expected);
});

test('YML to str formatted', () => {
  const file1 = absolutePath('./__fixtures__/file1.yml');
  const file2 = absolutePath('./__fixtures__/file2.yml');
  const expected = readFile('./__fixtures__/result.txt');

  expect(gendiff(file1, file2)).toEqual(expected);
});

test('plain', () => {
  const file1 = absolutePath('./__fixtures__/file1.json');
  const file2 = absolutePath('./__fixtures__/file2.json');
  const expected = readFile('./__fixtures__/resultPlain.txt');

  expect(gendiff(file1, file2, 'plain')).toEqual(expected);
});

test('JSON', () => {
  const file1 = absolutePath('./__fixtures__/file1.json');
  const file2 = absolutePath('./__fixtures__/file2.json');
  const expected = readFile('./__fixtures__/resultJSON.txt');

  expect(gendiff(file1, file2, 'json')).toEqual(expected);
});

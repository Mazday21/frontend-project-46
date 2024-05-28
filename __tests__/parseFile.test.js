import path from 'path';
import parseFile from '../src/parseFromFile.js';

const filepath1 = path.resolve('__fixtures__/file1.json');
const filepath2 = path.resolve('__fixtures__/file2.json');

const obj1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

const obj2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

test('parseFile', () => {
  expect(parseFile(filepath1, filepath2)).toEqual([obj1, obj2]);
});

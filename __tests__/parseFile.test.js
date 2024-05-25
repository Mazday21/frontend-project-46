import fs from 'fs';
import path from 'path';
import parseFile from '../src/parseFromFile.js';

const filepath1 = path.resolve('file1.json');
const filepath2 = path.resolve('file2.json');

jest.mock(fs);

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

fs.readFileSync.mockImplementation((filepath) => {
  if (filepath === filepath1) {
    return JSON.stringify(obj1);
  }
  if (filepath === filepath2) {
    return JSON.stringify(obj2);
  }
  return null;
});

test('parseFile', () => {
  expect(parseFile(filepath1, filepath2)).toEqual([obj1, obj2]);
});
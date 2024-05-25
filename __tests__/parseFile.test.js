import fs from 'fs';
import parseFile from '../src/parseFromFile.js';

jest.mock('fs');

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
  const filepath1 = 'file1.json';
  const filepath2 = 'file2.json';

  fs.readFileSync.mockImplementation((path) => {
    if (path === filepath1) {
      return JSON.stringify(obj1);
    }
    if (path === filepath2) {
      return JSON.stringify(obj2);
    }
    return null;
  });

  expect(parseFile(filepath1, filepath2)).toEqual([obj1, obj2]);
});

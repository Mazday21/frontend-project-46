import { resolve, extname } from 'path';
import { cwd } from 'process';
import parseData from './parseData.js';
import readFile from './readFile.js';
import diff from './compareObjects.js';
import formatter from './formatters/index.js';

const absolutePath = (filePath) => {
  const currentDir = cwd();
  return resolve(currentDir, filePath);
};

export default (filePath1, filePath2, format = 'stylish') => {
  const path1 = absolutePath(filePath1);
  const path2 = absolutePath(filePath2);
  const extension1 = extname(filePath1);
  const extension2 = extname(filePath2);
  const data1 = readFile(path1);
  const data2 = readFile(path2);
  const obj1 = parseData(data1, extension1);
  const obj2 = parseData(data2, extension2);
  const differences = diff(obj1, obj2);
  const result = formatter(differences, format);
  return result;
};

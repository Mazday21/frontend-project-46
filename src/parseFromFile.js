import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';
import { resolve } from 'path';
import { cwd } from 'process';

const absolutePath = (filePath) => {
  const currentDir = cwd();
  return resolve(currentDir, filePath);
};

const getExtension = (filePath) => filePath.slice(filePath.lastIndexOf('.'));

export default function parseFile(filePath1, filePath2) {
  const extension1 = getExtension(filePath1);
  const extension2 = getExtension(filePath2);
  const path1 = absolutePath(filePath1);
  const path2 = absolutePath(filePath2);
  let data1 = '';
  let data2 = '';

  try {
    if (extension1 === '.json' && extension2 === '.json') {
      data1 = JSON.parse(readFileSync(path1, 'utf8'));
      data2 = JSON.parse(readFileSync(path2, 'utf8'));
    } else if ((extension1 === '.yml' && extension2 === '.yml') || (extension1 === '.yaml' && extension2 === '.yaml')) {
      data1 = yaml.load(readFileSync(path1, 'utf8'));
      data2 = yaml.load(readFileSync(path2, 'utf8'));
    } else throw new Error('Unknown extension');
    return [data1, data2];
  } catch (error) {
    console.error('Error reading or parsing files:', error);
    throw error;
  }
}

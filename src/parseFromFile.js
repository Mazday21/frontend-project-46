import { readFileSync } from 'node:fs';
import path from 'path';

export default function parseFile(filePath1, filePath2) {
  try {
    const getFileFormat = (filePath) => path.extname(filePath);
    if (getFileFormat(filePath1) !== '.json' || getFileFormat(filePath2) !== '.json') {
      throw new Error(`Unknown file format from ${filePath1}, ${filePath2}`);
    }
    const data1 = JSON.parse(readFileSync(filePath1, 'utf8'));
    const data2 = JSON.parse(readFileSync(filePath2, 'utf8'));
    return [data1, data2];
  } catch (error) {
    console.error('Error reading or parsing files:', error);
    throw error;
  }
}

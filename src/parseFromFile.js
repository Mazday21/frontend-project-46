import { readFileSync } from 'node:fs';
import path from 'path';

export default function parseFile(filePath1, filePath2) {
  try {
    const absolutPath1 = path.resolve(filePath1);
    const absolutPath2 = path.resolve(filePath2);
    const data1 = JSON.parse(readFileSync(absolutPath1, 'utf8'));
    const data2 = JSON.parse(readFileSync(absolutPath2, 'utf8'));
    return [data1, data2];
  } catch (error) {
    console.error('Error reading or parsing files:', error);
    throw error;
  }
}

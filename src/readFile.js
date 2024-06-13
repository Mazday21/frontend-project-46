import { readFileSync } from 'node:fs';

export default function readFile(filePath) {
  let data = '';

  try {
    data = readFileSync(filePath, 'utf8');
    return data;
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
}

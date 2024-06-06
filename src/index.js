import parsingFile from './parseFromFile.js';
import diff from './compareObjects.js';
import formatter from './formatters/index.js';

export default (filepath1, filepath2, format = 'stylish') => {
  const arrObjs = parsingFile(filepath1, filepath2);
  const differences = diff(arrObjs[0], arrObjs[1]);
  const result = formatter(differences, format);
  return result;
};

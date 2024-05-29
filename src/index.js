import parsingFile from './parseFromFile.js';
import objectToString from './objectToString.js';
import compareObjects from './compareObjects.js';

export default (filepath1, filepath2, format = 'stylish') => {
  const arrObjs = parsingFile(filepath1, filepath2, format);
  const differences = compareObjects(arrObjs[0], arrObjs[1]);
  const result = (objectToString(differences));
  return result;
};

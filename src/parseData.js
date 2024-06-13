import yaml from 'js-yaml';

export default function parseFile(data, extension) {
  let parseData = '';
  switch (extension) {
    case '.json':
      parseData = JSON.parse(data);
      break;
    case '.yml':
      parseData = yaml.load(data);
      break;
    case '.yaml':
      parseData = yaml.load(data);
      break;
    default:
      throw new Error('Unknown extension');
  }

  return parseData;
}

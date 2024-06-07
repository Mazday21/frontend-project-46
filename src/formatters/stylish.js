import _ from 'lodash';

const indent = '    ';

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return data;
  }

  const nestedIndent = indent.repeat(depth);
  const entries = Object.entries(data);
  const strings = entries.map((entry) => {
    const [key, value] = entry;
    const indentedKey = `${nestedIndent}    ${key}`;
    const formattedValue = stringify(value, depth + 1);
    return `${indentedKey}: ${formattedValue}`;
  });
  const blockStart = '{\n';
  const blockContent = strings.join('\n');
  const blockEnd = `\n${nestedIndent}}`;
  const formattedBlock = blockStart + blockContent + blockEnd;

  return formattedBlock;
};

const stylish = (data) => {
  const iter = (obj, depth) => {
    const nestedIndent = indent.repeat(depth);
    const result = obj.flatMap((node) => {
      const {
        key, oldValue, value, type,
      } = node;
      switch (type) {
        case 'added':
          return `${nestedIndent}  + ${key}: ${stringify(value, depth + 1)}`;
        case 'deleted':
          return `${nestedIndent}  - ${key}: ${stringify(value, depth + 1)}`;
        case 'unchanged':
          return `${nestedIndent}    ${key}: ${stringify(value, depth + 1)}`;
        case 'changed':
          return `${nestedIndent}  - ${key}: ${stringify(oldValue, depth + 1)}\n${nestedIndent}  + ${key}: ${stringify(value, depth + 1)}`;
        case 'hasChild':
          return `${nestedIndent}    ${key}: ${iter(value, depth + 1)}`;
        default:
          throw new Error('Unknown type');
      }
    });
    return `{\n${result.join('\n')}\n${nestedIndent}}`;
  };
  return iter(data, 0);
};

export default stylish;

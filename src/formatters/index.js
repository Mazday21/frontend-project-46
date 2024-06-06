import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatters = {
  plain,
  stylish,
  json,
};

export default (diff, format) => {
  if (!formatters[format]) throw new Error(`error: option '-f, --format <type>' argument '${format}' is invalid. Allowed choices are stylish, plain, json.`);

  return formatters[format](diff);
};

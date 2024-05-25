export default function compareObjects(obj1, obj2) {
  const result = {};
  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  const sortedKeys = Array.from(keys).sort();

  sortedKeys.forEach((key) => {
    const hasKey1 = Object.hasOwn(obj1, key);
    const hasKey2 = Object.hasOwn(obj2, key);

    if (hasKey1 && !hasKey2) {
      result[`- ${key}`] = obj1[key];
    } else if (!hasKey1 && hasKey2) {
      result[`+ ${key}`] = obj2[key];
    } else if (hasKey1 && hasKey2 && obj1[key] !== obj2[key]) {
      result[`- ${key}`] = obj1[key];
      result[`+ ${key}`] = obj2[key];
    } else if (hasKey1 && hasKey2) {
      result[`  ${key}`] = obj1[key];
    }
  });
  return result;
}

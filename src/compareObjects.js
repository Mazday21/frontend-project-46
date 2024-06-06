import _ from 'lodash';

const diff = (obj1, obj2) => {
  const sortedUniKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const resultObj = sortedUniKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (!Object.hasOwn(obj1, key)) {
      return { key, value: value2, type: 'added' };
    }

    if (!Object.hasOwn(obj2, key)) {
      return { key, value: value1, type: 'deleted' };
    }

    if (value1 === value2) {
      return { key, value: value1, type: 'unchanged' };
    }

    if (typeof value1 === 'object' && typeof value2 === 'object') {
      return { key, value: diff(value1, value2), type: 'hasChild' };
    }
    return {
      key,
      oldValue: value1,
      value: value2,
      type: 'changed',
    };
  });
  return resultObj;
};
export default diff;

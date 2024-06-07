import _ from 'lodash';

const diff = (obj1, obj2) => {
  const sortedUniKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));

  return sortedUniKeys.reduce((acc, key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    let item = { key };

    if (!Object.hasOwn(obj1, key)) {
      item = { ...item, value: value2, type: 'added' };
    } else if (!Object.hasOwn(obj2, key)) {
      item = { ...item, value: value1, type: 'deleted' };
    } else if (value1 === value2) {
      item = { ...item, value: value1, type: 'unchanged' };
    } else if (typeof value1 === 'object' && typeof value2 === 'object' && value1 !== null && value2 !== null) {
      item = { ...item, value: diff(value1, value2), type: 'hasChild' };
    } else {
      item = {
        ...item, oldValue: value1, value: value2, type: 'changed',
      };
    }

    acc.push(item);
    return acc;
  }, []);
};

export default diff;

import { objectToString } from '../gendiff.js';

const obj = {
  '- follow': false,
  '  host': 'hexlet.io',
  '- proxy': '123.234.53.22',
  '- timeout': 50,
  '+ timeout': 20,
  '+ verbose': true,
};

const str = '- follow: false\nhost: hexlet.io\n- proxy: 123.234.53.22\n- timeout: 50\n+timeout: 20\n+ verbose: true';

test('objectToString', () => {
  expect(objectToString(obj)).toEqual(str);
});

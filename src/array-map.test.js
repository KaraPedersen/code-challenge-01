import { doubleNumbers, stringyNumbers, capitalizeNames } from './array-map';

test('it doubles the numbers', () => {
  const input = [2, 5, 100];
  const actual = doubleNumbers(input);
  expect(actual).toEqual([4, 10, 200]);

});

test('it turns the array to a string', () => {
  const input = [2, 5, 100];
  const actual = stringyNumbers(input);
  expect(actual).toEqual(['2', '5', '100']);
});

test('capitalize each of an array of names', () => {
  const input = ['john', 'JACOB', 'jinGleHeimer', 'schmidt'];
  const actual = capitalizeNames(input);
  expect actual.toEqual(['John', 'Jacob', 'Jingleheimer', 'Schmidt'])
});
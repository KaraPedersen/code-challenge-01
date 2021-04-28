import { fiveAndGreaterOnly, evensOnly, fiveCharactersOrFewerOnly } from './array-filter';

test('Five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

test('evensOnly', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = evensOnly(input); // act
  expect(output).toEqual([6, 8, 2]); // assert
});

test('fiveCharactersOrFewerOnly', () => {
  const words = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping']; // arrange
  const actual = fiveCharactersOrFewerOnly(words); // act
  expect(actual).toEqual(['by', 'dog', 'wolf', 'eaten']); // assert
});
import { capitalizeObjectKeys, sortedKeys } from './object-keys-entries.js';

test('it capitalizes the keys', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
  const output = capitalizeObjectKeys(dataObject); //act
  expect(output).toEqual(['NAME', 'AGE']); //assert
});

test('sortedKeys', () => {
  const booger = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] };
  const newbooger = sortedKeys(booger);
  expect(newbooger).toEqual(['age', 'name', 'isDog', 'friends']);
});

import { doubleNumbers, stringyNumbers, capitalizeNames, makeStrings, makeHeader, namesOnly } from './array-map';

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

test('capitalize names', () => {
  const input = ['john', 'JACOB', 'jinGleHeimer', 'schmidt'];
  const actual = capitalizeNames(input);
  expect(actual).toEqual(['John', 'Jacob', 'Jingleheimer', 'Schmidt']);
});

test('namesOnly', () => {
  const input = [
    {
      name: 'Angelina Jolie',
      age: 80
    },
    {
      name: 'Eric Jones',
      age: 2
    },
    {
      name: 'Paris Hilton',
      age: 5
    },
    {
      name: 'Kayne West',
      age: 16
    },
    {
      name: 'Bob Ziroll',
      age: 100
    }];
  const actual = namesOnly(input);
  expect(actual).toEqual([
    'Angelina Jolie',
    'Eric Jones',
    'Paris Hilton',
    'Kayne West',
    'Bob Ziroll'
  ]);
});

const famousPeople = [
  {
    name: 'Angelina Jolie',
    age: 80
  },
  {
    name: 'Eric Jones',
    age: 2
  },
  {
    name: 'Paris Hilton',
    age: 5
  },
  {
    name: 'Kanye West',
    age: 16
  },
  {
    name: 'Bob Ziroll',
    age: 100
  }
];

test('make strings', () => {
  const output = makeStrings(famousPeople);
  expect(output).toEqual([
    'Angelina Jolie can go to The Matrix',
    'Eric Jones is under age!!',
    'Paris Hilton is under age!!',
    'Kanye West is under age!!',
    'Bob Ziroll can go to The Matrix',
  ]);
});

test('makeHeader', () => {
  const output = makeHeader(famousPeople);
  expect(output).toEqual([
    '<h1>Angelina Jolie</h1><h2>80</h2>',
    '<h1>Eric Jones</h1><h2>2</h2>',
    '<h1>Paris Hilton</h1><h2>5</h2>',
    '<h1>Kanye West</h1><h2>16</h2>',
    '<h1>Bob Ziroll</h1><h2>100</h2>'
  ]);
});
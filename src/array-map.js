export function doubleNumbers(arr) {
  return arr.map(item => {
    const multiply = item * 2;
    return multiply;
  });

}

export function stringyNumbers(arr) {
  return arr.map(item => {
    const stringy = item + '';
    return stringy;
  });
}

export function capitalizeNames(arr) {
  return arr.charAt(0).toUpperCase() + arr.slice(1);
}
capitalizeNames(input);


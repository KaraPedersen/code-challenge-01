export function fiveAndGreaterOnly(arr) {
  return arr.filter(item => item > 5);
}


export function evensOnly(arr) {
  return arr.filter(number => number % 2 === 0);
}

export function fiveCharactersOrFewerOnly(words) {
  return words.filter(word => word.length < 5);
}
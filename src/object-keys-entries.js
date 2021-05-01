export function capitalizeObjectKeys(obj) {
  const booger = Object.keys(obj);
  return booger.map(newbooger => newbooger.toUpperCase());
}

export function sortedKeys(obj) {
  const booger = Object.keys(obj);
  return booger.sort((a, b) => a.length - b.length);

}

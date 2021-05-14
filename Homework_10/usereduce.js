function useReduce(arr) {
  const result = arr.reduce((sum, item) => (item > 18 ? sum + item : sum), 0);
  return result;
}

console.log(useReduce([1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]));

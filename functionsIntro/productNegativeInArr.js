function negativeNum(arr) {
  let maxNegativeNums = [];
  for (let i = 0; i < arr.length; i++) {
    let maxNegative = -Infinity;
    for (let j = 0; j < arr[i].length; j++) {
      if (typeof arr[i] !== "object") {
        return "Invalid Argument";
      }
      if (arr[i][j] < 0 && Math.abs(arr[i][j]) < Math.abs(maxNegative)) {
        maxNegative = arr[i][j];
        maxNegativeNums[i] = maxNegative;
      }
    }
  }
  let filtredNegative = maxNegativeNums.filter(() => true);
  if (filtredNegative.length < 2) {
    return "Cannot calculate";
  }
  let max = Math.max(...filtredNegative);
  let idx = filtredNegative.indexOf(max, 1);
  filtredNegative.splice(idx, 1);
  let secMax = Math.max(...filtredNegative);
  return max * secMax;
}
console.log(
  negativeNum([
    [1, -20, -8],
    [1, 2],
    [1, -2],
  ])
);

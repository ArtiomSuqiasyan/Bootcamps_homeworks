function negativeNum(arr) {
  let sum = 0;
  let maxMin = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].length === undefined) {
        return "Invalid Argument";
      }
      if (arr[i][j] < 0) {
        sum += arr[i][j];
      }
    }
    if (sum < 0 && sum > maxMin) {
      maxMin = sum;
    }
    sum = 0;
  }
  if (maxMin === -Infinity) {
    return "No negatives";
  }
  return Math.abs(maxMin);
}
console.log(negativeNum([[1, 2], [1, 2, 3], [1, 2], 5]));

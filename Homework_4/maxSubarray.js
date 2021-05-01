function getMaxSubSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sumStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumStart += arr[j];
      sum = Math.max(sum, sumStart);
    }
  }
  return sum;
}

console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]));

function closest(arr, num) {
  let min = Math.abs(arr[0] - num);
  let idx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - num) < min) {
      min = Math.abs(arr[i] - num);
      idx = i;
    }
  }
  return idx;
}

console.log(closest([21, -9, 15, 2116, -71, 33], 2116));

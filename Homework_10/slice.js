function createSlice(arr, startNum = 0, endNum = arr.length) {
  if (startNum < 0) {
    startNum = arr.length + startNum;
  }
  if (endNum < 0) {
    endNum = arr.length + endNu;
  }
  let slicedArr = [];
  for (let i = startNum; i < endNum; i++) {
    slicedArr.push(arr[i]);
  }
  return slicedArr;
}

console.log(createSlice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -8, -2));
console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(-8, -2));

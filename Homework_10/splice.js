function createSplice(
  arr,
  startNum = 0,
  quantity = arr.length - startNum,
  ...args
) {
  if (startNum < 0) {
    startNum = arr.length + startNum;
  }
  let endIdx = startNum + quantity;
  let newArr = [];
  let splicedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= startNum && i < endIdx) {
      splicedArr.push(arr[i]);
    } else if (i === endIdx) {
      newArr.push(...args);
      newArr.push(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  arr = newArr;
  return splicedArr
}

console.log(createSplice([0, 1, 2, 3, 4, 5, 6, 7, 8], -6, 3, 1, 2, 3));

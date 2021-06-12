const arr = [-2, 0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14];
function findByVal(arr, val) {
  const middleElemIdx = Math.floor(arr.length - 1 / 2);
  if (middleElemIdx === 0) {
    return -1;
  }
  if (val === arr[middleElemIdx]) {
    return middleElemIdx;
  }
  if (val < arr[middleElemIdx]) {
    return findByVal(arr.slice(0, middleElemIdx), val);
  }
  return findByVal(arr.slice(middleElemIdx), val);
}

console.log(findByVal(arr, 0));

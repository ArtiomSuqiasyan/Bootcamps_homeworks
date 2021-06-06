function recFindAscOrder(arr, idx = 0) {
  if (idx === arr.length - 1) {
    return -1;
  }
  if (arr[idx] > arr[idx + 1]) {
    return idx;
  } else {
    idx++;
  }
  return recFindAscOrder(arr, idx);
}
console.log(recFindAscOrder([-9, -4, -4, 3, 4, 10]));

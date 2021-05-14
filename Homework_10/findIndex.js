function findIndex(arr, fn, idx = 0) {
  for (let i = idx; i < arr.length; i++) {
    if (fn(arr[i])) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], (el) => el > 40));

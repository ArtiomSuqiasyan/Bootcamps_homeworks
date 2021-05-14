function some(arr, fn, idx = 0) {
  for (let i = idx; i < arr.length; i++) {
    if (fn(arr[i])) {
      return true;
    }
  }
  return false;
}

console.log(some([1, 2, 3, 4], (n) => n > 4));

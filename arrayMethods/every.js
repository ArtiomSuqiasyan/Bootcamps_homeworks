function every(arr, fn, idx = 0) {
  for (let i = idx; i < arr.length; i++) {
    if (fn(arr[i])) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(every([1, 2, 3, 4], (n) => n > 0));

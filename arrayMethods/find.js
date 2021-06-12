function find(arr, fn, idx = 0) {
    for (let i = idx; i < arr.length; i++) {
      if (fn(arr[i])) {
        return arr[i]
      }
    }
    return undefined;
  }
  console.log(find([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], (el) => el > 1));
function filet(arr, fn, idx = 0) {
  let filtredArr = [];
  for (let i = idx; i < arr.length; i++) {
    if (fn(arr[i])) {
      filtredArr.push(arr[i]);
    }
  }
  return filtredArr;
}
console.log(filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], (el) => el > 1));

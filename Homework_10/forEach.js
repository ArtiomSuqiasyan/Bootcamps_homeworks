function forEach(arr, fn, idx = 0) {
  for (let i = idx; i < arr.length; i++) {
    fn(arr[i]);
  }
}
console.log(forEach([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], (el) => console.log(el + 5)));

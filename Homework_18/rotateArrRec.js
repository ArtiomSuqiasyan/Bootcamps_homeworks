function rotateArr(arr, num) {
  if (num < 0) {
    num = arr.length + num;
  }
  if (num === arr.length) {
    return arr;
  }

  let lastElement = arr.pop();
  arr.unshift(lastElement);
  num++;
  return rotateArr(arr, num);
}

console.log(rotateArr(["a", "b", "c", "d", "e", "f", "g", "h"], 3));

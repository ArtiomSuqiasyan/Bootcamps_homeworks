function checkUniqueArray(arr) {
  return arr.length === new Set(arr).size;
}

console.log(checkUniqueArray([1, 2, 3, 4, 5]));

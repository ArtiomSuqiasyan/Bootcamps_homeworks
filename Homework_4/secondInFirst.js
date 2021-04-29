function secondInFirst(arr1, arr2) {
  let lastElement = arr1.pop();
  return arr1.concat(arr2).concat(lastElement);
}

console.log(secondInFirst([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

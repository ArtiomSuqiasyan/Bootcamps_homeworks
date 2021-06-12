function filterNumbers(arr) {
  let numbers = [[], []];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0){
      continue
    }
    if (arr[i] % 2 === 0) {
      numbers[0].push(arr[i]);
    } else {
      numbers[1].push(arr[i]);
    }
  }
  return numbers;
}

console.log(filterNumbers([1, 4, 5, 6, 5, 3, 0, 5, 6, 7]));

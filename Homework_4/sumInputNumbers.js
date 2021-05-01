function sumInput() {
  let numbers = [];

  while (true) {
    let num = prompt("Please, enter a number");
    if (num === "" || num === null || !isFinite(num)) {
      break;
    }
    numbers.push(+num);
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum
}

console.log(sumInput());

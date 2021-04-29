function sortNumbers(num1, num2, num3) {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  arr.sort((a, b) => a - b);
  [num1, num2, num3] = arr;
  console.log(num1, num2, num3);
}

sortNumbers(25, 26, 22);

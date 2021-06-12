function sortNumbers(num1, num2, num3) {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  arr.sort((a, b) => a - b);
  let min;
  let mid;
  let max;
  [min, mid, max] = arr;
  console.log(num1, num2, num3);
}

sortNumbers(min, mid, max);

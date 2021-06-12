function reverseFirstAndLast(num) {
  let lastDigit = num % 10;
  if (lastDigit === 0) {
    return "Cannot change";
  }
  if (num < 0) {
    num = -num;
  }
  if (num < 10) {
    return num;
  }

  let numClone = num;
  let count = 0;
  while (numClone) {
    numClone = Math.floor(numClone / 10);
    count++;
  }
  let firstDigit = Math.floor(num / Math.pow(10, count - 1));
  num = num  - firstDigit * Math.pow(10, count - 1) - lastDigit;
  return lastDigit * Math.pow(10, count - 1) + num + firstDigit;
}

console.log(reverseFirstAndLast(22568));

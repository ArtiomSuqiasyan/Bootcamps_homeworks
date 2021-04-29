function reverseNumber(num) {
  if ((num < 10 && num > -10) || num % 10 === 0) {
    return num;
  }
  let numClone = num;
  let count = 0;
  while (numClone) {
    numClone = Math.floor(numClone / 10);
    count++;
  }
  let newNum = 0;
  for (let i = 0; i < count; i++) {
    let digit = num % 10;
    num = (num - digit) / 10;
    newNum += digit * Math.pow(10, count - 1 - i);
  }
  return newNum;
}

console.log(reverseNumber(240095));

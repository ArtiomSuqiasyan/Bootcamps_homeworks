function lastToBeginning(int) {
  if (int < 10 || int % 10 === 0) {
    return int;
  }
  let lastDigit = int % 10;
  let intClone = Math.floor(int / 10);
  let count = 0;
  while (int) {
    int = Math.floor(int / 10);
    count++;
  }
  return lastDigit * Math.pow(10, count - 1) + intClone;
}
console.log(lastToBeginning(316));

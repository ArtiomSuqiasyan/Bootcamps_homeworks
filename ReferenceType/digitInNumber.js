function digitInNumber(digit, num) {
  while (num) {
    let lastDigit = num % 10;
    num = (num - lastDigit) / 10;
    if (lastDigit === digit) {
      return "Yes";
    }
  }
  return "No";
}

console.log(digitInNumber(5, 2348));

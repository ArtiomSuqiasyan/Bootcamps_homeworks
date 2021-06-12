function calculateSumOfDigits(num, sum = 0) {
  if (sum < 10 && num === 0) {
    return sum;
  }

  if (num === 0 && sum >= 10) {
    num = sum;
    sum = 0;
    return calculateSumOfDigits(num, sum);
  }

  sum += num % 10;
  num = Math.trunc(num / 10);

  return calculateSumOfDigits(num, sum);
}

console.log(calculateSumOfDigits(655));

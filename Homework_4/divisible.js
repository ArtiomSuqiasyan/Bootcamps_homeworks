function divisible(num) {
  if (num === 0) {
    return "Cannot calculate";
  }
  let product = 1;
  let sum = 0;
  while (num) {
    let digit = num % 10;
    num = Math.floor(num / 10);
    product *= digit;
    sum += digit;
  }
  if (product === 0) {
    return "Cannot calculate";
  }
  if (product % sum === 0) {
    return "Quotent is " + product / sum;
  }
  return "Reminder is " + (product % sum);
}

console.log(divisible(3366));

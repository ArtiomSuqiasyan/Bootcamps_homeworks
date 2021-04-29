function primeNumber(num) {
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return "No";
    }
  }
  return "Yes";
}
console.log(primeNumber(19));

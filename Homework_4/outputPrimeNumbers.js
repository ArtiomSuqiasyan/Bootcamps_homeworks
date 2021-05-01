function primeNumbers(num) {
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i++) {
      let j;
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        break;
      }
    }
    if (i === j) {
      console.log(i);
    }
  }
}

primeNumbers(112525);

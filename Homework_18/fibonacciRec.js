function recFibonacci(num) {
    if (num === 0 || num === 1) {
      return 0;
    }
    if (num === 2 || num === 3) {
      return 1;
    }
    return recFibonacci(num - 1) + recFibonacci(num - 2);
  }
  console.log(recFibonacci(10));
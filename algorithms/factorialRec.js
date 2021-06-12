function factorialRec(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorialRec(num - 1);
}
console.log(factorialRec(5));

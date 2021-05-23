class Calculator {
  plus(a, b) {
    return Number(a) + Number(b);
  }
  minus(a, b) {
    return Number(a) - Number(b);
  }
  multiply(a, b) {
    return Number(a) * Number(b);
  }
  divide(a, b) {
    return Number(a) / Number(b);
  }
}

let plus = new Calculator;
console.log(plus.plus(1, 2))

let minus = new Calculator;
console.log(minus.minus(1, 2))

let multiply = new Calculator;
console.log(multiply.multiply(1, 2))

let divide = new Calculator;
console.log(divide.divide(1, 2))
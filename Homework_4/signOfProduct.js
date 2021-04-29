function signOfProduct(num1, num2, num3) {
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Unsigned";
  }
  if (
    (num1 > 0 && num2 > 0 && num3 > 0) ||
    (num1 > 0 && num2 < 0 && num3 < 0) ||
    (num1 < 0 && num2 > 0 && num3 < 0) ||
    (num1 < 0 && num2 < 0 && num3 > 0)
  ) {
    return "+";
  }
  return "-";
}

console.log(signOfProduct(-14, 5, -2));

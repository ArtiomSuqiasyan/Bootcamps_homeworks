function sum(num1 = 0) {
  num1 = Number(num1);
  return function addOne(num2 = 0) {
    num2 = Number(num2);
    if (Number.isNaN(num1, num2)) {
      return "Please, enter only numbers!";
    }
    return num1 + num2;
  };
}

console.log(sum("3")(2));
const addTwo = sum("1");
console.log(addTwo("2"));
const addTen = sum("10");
console.log(addTen("2"));

function multiple(num) {
  if (num !== 0) {
    if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
      return num + " is a multiple of 3, 5 and 7.";
    }
    if (num % 3 === 0 && num % 5 === 0) {
      return num + " is a multiple of 3 and 5";
    }
    if (num % 3 === 0 && num % 7 === 0) {
      return num + " is a multiple of 3 and 7";
    }
    if (num % 5 === 0 && num % 7 === 0) {
      return num + " is a multiple of 5 and 7";
    }
    if (num % 3 === 0) {
      return num + " is a multiple of 3";
    }
    if (num % 5 === 0) {
      return num + " is a multiple of 5";
    }
    if (num & (7 === 0)) {
      return num + " is a multiple of 7";
    }
  }
  return num + " is not a multiple of 3, 5, 7";
}

console.log(multiple(0));

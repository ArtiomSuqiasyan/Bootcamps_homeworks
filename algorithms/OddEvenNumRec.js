function checkOddDigits(num) {
    if (num === 0) {
      return true;
    }
    if (num % 2 === 0) {
      return false;
    }
  
    return checkOddDigits(Math.trunc(num / 10));
  }
  
  console.log(checkOddDigits(1997));
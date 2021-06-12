function getEvenNumbers(num1, num2) {
  let result = ""
  for (let i = num1; i <= num2; i++) {
    if(i % 2 === 0){
      let a = Math.floor(i / 10);
      while(a){
        let digit = a % 10;
        if(digit % 2 !== 0){
          break
        }
        a = (a - digit) / 10;
      }
      if(a === 0){
        result += `${i}, `
      }
    }
  }
  return result.slice(0, result.length - 2)
}

console.log(getEvenNumbers(15, 42));

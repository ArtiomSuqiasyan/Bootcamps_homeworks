function convert(str) {
  let result = 0;
  let pow = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    result += +str[i] * Math.pow(2, pow);
    pow++;
  }
  return result;
}

console.log(convert("10010"));

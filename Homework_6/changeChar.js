function changeChar(str) {
  let count = str.length % 3;
  let result = "";
  for (let i = 0; i < str.length - count; i += 3) {
    result += str.slice(i + 1, i + 3) + str[i];
  }
  return result + str.slice(str.length - count);
}
console.log(changeChar("12345678"));

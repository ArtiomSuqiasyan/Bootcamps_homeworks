function validPhoneNumber(str) {
  str = str.split(" ").join("");
  if (!isNaN(str)) {
    if (str.length === 10 && str[0] !== "+") {
      return str;
    }
    if (str.length === 11 && str[0] === "+") {
      return str.substr(1, str.length - 1)
    }
  }
  return "Bad number";
}

console.log(validPhoneNumber("+123456789"));
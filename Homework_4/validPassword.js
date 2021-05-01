function validPassword(str) {
  str = str.trim();
  const symbArr = ["$", "#", "@"];
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const alphabetUpper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (str.length < 6) {
    return "The password is short!";
  }
  if (str.length > 16) {
    return "The password is long!";
  }
  let i = 0;
  for (; i < str.length; i++) {
    if (symbArr.includes(str[i])) {
      break;
    }
  }
  if (i === str.length) {
    return "Please, add a symbol";
  }
  for (i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) {
      break;
    }
  }
  if (i === str.length) {
    return "Please, add a letter";
  }
  for (i = 0; i < str.length; i++) {
    if (alphabetUpper.includes(str[i])) {
      break;
    }
  }
  if (i === str.length) {
    return "Please, add a uppercase letter";
  }
  for (i = 0; i < str.length; i++) {
    if (numbers.includes(+str[i])) {
      break;
    }
  }
  if (i === str.length) {
    return "Please, add a number";
  }
}

console.log(validPassword("333333333#eW"));

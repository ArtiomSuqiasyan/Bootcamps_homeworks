function parsing(str) {
  if (isNaN(str[0]) && str[0] !== ".") {
    return NaN;
  }
  let parse = "";
  let bool = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "." && bool) {
      parse += str[i];
      bool = false;
      continue;
    }

    if (isNaN(str[i])) {
      break;
    }
    parse += str[i];
  }
  return Number(parse);
}
console.log(parsing("002103.34.34r4asdeq"));
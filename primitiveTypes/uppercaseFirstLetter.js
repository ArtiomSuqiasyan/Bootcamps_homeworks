function uppercaseFirstLetter(str) {
  if (typeof str !== "string") {
    return "It is not string";
  }
  return str[0].toUpperCase() + str.slice(1);
}

console.log(uppercaseFirstLetter("hello"));

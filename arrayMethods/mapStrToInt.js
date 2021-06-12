function parseInteger(arr) {
  let result = arr.map((item) => (isNaN(item) ? null : Number(item)));
  return result;
}

console.log(parseInteger(["1", "px", "2323"]));

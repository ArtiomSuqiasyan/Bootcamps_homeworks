function filterFalsyValues(arr) {
  arr = arr.filter(Boolean);
  return arr;
}

const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
console.log(filterFalsyValues(values));

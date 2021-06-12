function filtredArray(arr) {
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
  }
  return even.concat(odd);
}

console.log(filtredArray([8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3]));

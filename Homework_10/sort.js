function sorting(arr, str = "Asc") {
  if (str !== "Asc" && str !== "Desc") {
    return "Don't understand";
  }
  if (str === "Asc") {
    arr.sort((a, b) => a - b);
  }
  if (str === "Desc") {
    arr.sort((a, b) => b - a);
  }
  return arr;
}

console.log(sorting([1, 4, 3, 2, 0, 7, -5, -7], "Desc"));

// function sort(arr, str = "Asc") {
//   if (str !== "Asc" && str !== "Desc") {
//     return "Don't understand";
//   }
//   let done = false;
//   while (!done) {
//     done = true;
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i - 1] > arr[i]) {
//         done = false;
//         let helpVar = arr[i - 1];
//         arr[i - 1] = arr[i];
//         arr[i] = helpVar;
//       }
//     }
//   }
//   if (str === "Desc") {
//     return arr.reverse();
//   }
//   return arr;
// }

// console.log(sort([1, 4, 3, 2, 5], "Asc"));

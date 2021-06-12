function getBestStudient(obj) {
  let averages = [];
  for (let idx in obj) {
    let average = obj[idx].reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);
    averages.push(average / obj[idx].length);
  }
  let max = Math.max(...averages);
  let maxIdx = averages.indexOf(max);
  return Object.keys(obj)[maxIdx];
}
let obj = {
  John: [100, 90, 80],
  Bob: [100, 70, 80],
};
console.log(getBestStudient(obj));

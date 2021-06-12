function sumArrRec(arr, sum = 0) {
  if (arr.length === 0) {
    return sum;
  }
  let [head, ...tail] = arr;
  sum += head;
  return sumArrRec(tail, sum);
}
console.log(sumArrRec([1, 2, 3, 4, 5]));

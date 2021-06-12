function getMinPositiveNum(arr, min = Infinity) {
  if (arr.length === 0) {
    return min === Infinity ? -1 : min;
  }
  let [head, ...tail] = arr;
  if (head < min && head > 0) {
    min = head;
  }
  return getMinPositiveNum(tail, min);
}

console.log(getMinPositiveNum([56, -9, 87, -23, 0, -105, 55, 1]));

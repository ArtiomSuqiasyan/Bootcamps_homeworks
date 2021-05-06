function getMaxPairProduct(arr) {
  let maxProduct = arr[0] * arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] * arr[i + 1] > maxProduct) {
      maxProduct = arr[i] * arr[i + 1];
    }
  }
  return maxProduct;
}

console.log(getMaxPairProduct([1, 2, 3, 5, 0, 6, 73, 5, 31, 511, 500]));

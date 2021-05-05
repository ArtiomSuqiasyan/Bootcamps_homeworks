function getPossibleSubsests(arr) {
  if (arr.length < 3) {
    return arr;
  }
  let newArr = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let subArr = [];
    subArr[0] = arr[i];
    for (let j = i + 1; j < arr.length - 1; j++) {
      let newSubArr = subArr.concat(arr[j]);
      for (let k = j + 1; k < arr.length; k++) {
        let thirdArr = newSubArr.concat(arr[k]);
        newArr.push(thirdArr);
      }
    }
  }
  return newArr;
}

console.log(getPossibleSubsests([5, 9, 23, 0, 2, 3, 4, 5, 6]));

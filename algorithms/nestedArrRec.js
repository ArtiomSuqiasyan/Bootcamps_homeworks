function nestedArr(arr, newArr = []) {
    if (arr.length === 0) {
      return newArr;
    }
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        return nestedArr(el, newArr);
      } else {
        newArr.push(el);
      }
    });
    return newArr;
  }
  console.log(nestedArr([14, [1, [[[3, []]], 1], 0]]));

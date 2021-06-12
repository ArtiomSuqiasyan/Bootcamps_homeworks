function swapObj(obj) {
  let newObj = {};
  for (let i in obj) {
    if (typeof newObj[obj[i]] !== "undefined") {
      let keys = [];
      let currentValue = newObj[obj[i]];
      for (let i = 0; i < currentValue.length; i++) {
        keys.push(currentValue[i]);
      }
      keys.push(i);
      newObj[obj[i]] = keys;
    } else newObj[obj[i]] = i;
  }
  return newObj;
}

console.log(swapObj({ a: 1, b: 2, c: 2, d: 2 }));
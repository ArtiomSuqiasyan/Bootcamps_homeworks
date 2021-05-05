function shallowCompare(obj1, obj2) {
  let sortObj1 = [];
  for (let i in obj1) {
    sortObj1.push([i, obj1[i]]);
  }

  sortObj1.sort(function (a, b) {
    return a[1] - b[1];
  });

  let obj1Sorted = {};
  sortObj1.forEach(function (item) {
    obj1Sorted[item[0]] = item[1];
  });

  let sortObj2 = [];
  for (let i in obj2) {
    sortObj2.push([i, obj2[i]]);
  }

  sortObj2.sort(function (a, b) {
    return a[1] - b[1];
  });

  let obj2Sorted = {};
  sortObj2.forEach(function (item) {
    obj2Sorted[item[0]] = item[1];
  });

  let keysObj1 = Object.keys(obj1Sorted);
  let valuesObj1 = Object.values(obj1Sorted);
  let keysObj2 = Object.keys(obj2Sorted);
  let valuesObj2 = Object.values(obj2Sorted);

  let i = 0;
  for (; i < keysObj1.length; i++) {
    if (keysObj1[i] === keysObj2[i] && valuesObj1[i] === valuesObj2[i]) {
      continue;
    }
    return false;
  }
  if (i === keysObj1.length) {
    return true;
  }

  return false;
}

let a = { a: "1", c: "3", b: "4" };
let b = { a: "1", b: "4", c: "3" };
console.log(shallowCompare(a, b));

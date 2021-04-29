function sumLength(arr){
    arr.sort((a, b) => a.length - b.length);
    return arr[0].length + arr[arr.length - 1].length
  }
  console.log(sumLength(["anymore", "raven", "me", "communicate"]));
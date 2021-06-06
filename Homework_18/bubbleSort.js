function sort(arr) {

    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
          done = false;
          let helpVar = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = helpVar;
        }
      }
    }

    return arr;
  }
  
  console.log(sort([1, 4, 3, 2, 5, 0, -5], "Asc"));
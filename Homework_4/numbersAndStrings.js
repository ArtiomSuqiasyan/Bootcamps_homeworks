function numberAndStrings(arr){
    let numbers = 0;
    let strings = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === "number"){
          numbers++;
        } else {
          strings++;
        }
    }return "Numbers:" + numbers + ", Strings:" + strings
  }
  console.log(numberAndStrings([1, "10", "hi", 2.5, 3]));
function plus(arr, idx1, idx2) {
    if(idx1 > arr.length -1 || idx2 > arr.length - 1){
        return "Index is nor defined"
    }
  
  return arr[idx1] + arr[idx2]
}

console.log(plus([1, 2, 4, 5, 6, 7, 5], 0, 1));


function minus(arr, idx1, idx2) {
    if(idx1 > arr.length -1 || idx2 > arr.length - 1){
        return "Index is nor defined"
    }
  
  return arr[idx1] - arr[idx2]
}

console.log(minus([1, 2, 4, 5, 6, 7, 5], 0, 1));

function multiply(arr, idx1, idx2) {
    if(idx1 > arr.length -1 || idx2 > arr.length - 1){
        return "Index is nor defined"
    }
  
  return arr[idx1] * arr[idx2]
}

console.log(multiply([1, 2, 4, 5, 6, 7, 5], 0, 1));

function division(arr, idx1, idx2) {
    if(idx1 > arr.length -1 || idx2 > arr.length - 1){
        return "Index is nor defined"
    }
  
  return arr[idx1] / arr[idx2]
}

console.log(division([1, 2, 4, 5, 6, 7, 5], 0, 1));
function rmFirst(arr){
    arr.splice(0, 1);
    return arr
}

console.log(rmFirst([1, 2, 3, 4, 5]))
function replace(arr){
    let newArr = Array(100);
    for(let i = 0; i < arr.length; i++){
        newArr[arr[i]] = arr[i]
    }
    return newArr
}

console.log(replace([4, 3, 0, 9]))
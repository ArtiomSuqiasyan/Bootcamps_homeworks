function findBigNumbers (arr, num){
    let newArr = []
    for(let i in arr){
        if(arr[i] > num){
            newArr.push(arr[i])
        }
    }
    if(newArr.length === 0){
        return "Such values do not exist."
    }
    return newArr
}

console.log(findBigNumbers([10, 25, 16, -5, 30, 15, 24] , 16))
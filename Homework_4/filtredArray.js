function filtredArray (arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number" && !isNaN(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filtredArray([8, 0, 1, 'hey', 12, 5 , true, '2', null, 7, 3]))
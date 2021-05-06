function filterByLength(arr){
    arr = arr.filter(word => word.length > 3);
    return arr
}


console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"]));
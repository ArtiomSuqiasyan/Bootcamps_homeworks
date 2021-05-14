function concatenateArrays(arr1, arr2) {
    arr1.push(...arr2)
    return arr1
    // return arr1.concat(arr2)
}

console.log(concatenateArrays([1, 2, 3], [2, 4, 5]));

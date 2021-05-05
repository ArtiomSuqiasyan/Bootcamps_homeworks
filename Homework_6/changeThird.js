function changeThird (str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(i % 3 === 0 && i !== 0){
            newStr += str[i - 2]
        } else {
            newStr += str[i]
        }
    }
    return newStr
}

console.log(changeThird("1234567890"))
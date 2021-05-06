function checkPolindrom (str){
    let reverseStr = str.split("").reverse().join("");
    return str === reverseStr
}

console.log(checkPolindrom("adfda"))
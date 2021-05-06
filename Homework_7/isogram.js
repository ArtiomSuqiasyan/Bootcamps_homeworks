function checkIsogram (str){
    str = str.split("");
    return str.length === new Set(str).size;
}

console.log(checkIsogram ("strsa"))
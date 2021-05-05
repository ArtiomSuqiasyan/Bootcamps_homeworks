function largestString(str){
    str = str.split(" ");
    let max = str[0]
    for(let i = 1; i < str.length; i ++){
        if(str[i].length >= max.length){
            max = str[i]
        }
    }
    return max
}

console.log(largestString("A revolution without dancing is a revolution not worth having"))

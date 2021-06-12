function difference(num){
    let max = num % 10;
    let min = num % 10;
    while(num){
        let digit = num % 10;
        num = Math.floor(num / 10);
        if(digit > max){
            max = digit
        }
        if (digit < min){
            min = digit
        }
    }
    return max - min
}

console.log(difference(213))
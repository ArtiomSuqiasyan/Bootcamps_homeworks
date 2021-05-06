function parsing(str, type = 10, convert = 10) {
  if(type === convert){
    return str
  }
  let result10 = "";
  if (type === 10) {
    if (isNaN(str[0])) {
      return NaN;
    }
    for (let i = 0; i < str.length; i++) {
      if (isNaN(str[i]) || str[i] === " ") {
        break;
      }
      result10 += str[i];
      result10 = +result10;
    }
  }

  if (type === 2) {
    for(let i = 0; i < str.length; i++){
      if(str[i] === "0" || str[i] === "1"){
        continue
      } else{
        return "Invalid number"
      }
    }
    let pow = 0;
    result10 = +result10;
    for (let i = str.length - 1; i >= 0; i--) {
      result10 += +str[i] * Math.pow(2, pow);
      pow++;
    }
  }

  if (type === 8) {
    for(let i = 0; i < str.length; i++){
      if(str[i] === "9" || isNaN(str[i])){
       return "Invalid number"
      }
    }
    result10 = +result10
    let pow = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      result10 += +str[i] * Math.pow(8, pow);
      pow++;
    }
    
  }
  

  if (convert === 10) {
    return result10;
  }

  if (convert === 2) {
    let result = "";
    while (result10) {
      let digit = result10 % 2;
      result10 = Math.floor(result10 / 2);
      result += digit;
    }
    return result.split("").reverse().join("");
  }

  if (convert === 8) {
    let result = "";
    while (result10) {
      let digit = result10 % 8;
      result10 = Math.floor(result10 / 8);
      result += digit;
    }
    return result.split("").reverse().join("");
  }
}

console.log(parsing("100010", 8, 10));

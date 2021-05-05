function sumFindNumbers(str) {
  let sum = 0;
  let i = 0;
  for (; i < str.length; i++) {
    if (!isNaN(parseInt(str.slice(i)))) {
      sum += parseInt(str.slice(i));
      for (; i < str.length; i++) {
        if (!isNaN(parseInt(str.slice(i)))) {
          continue;
        } else {
          break;
        }
      }
    }
  }
  return sum;
}

console.log(sumFindNumbers("FwrtY-45KHL120mn10P"));

console.log(parseInt("a124aafss"))
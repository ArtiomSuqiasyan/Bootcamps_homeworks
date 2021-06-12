function pattern(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    let x = i;
    for (let j = 1; j <= i; j++) {
      result += " " + x;
      x += num - j;
    }
    result += "\n";
  }

  console.log(result);
}

pattern(5);

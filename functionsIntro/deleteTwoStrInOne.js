function deleteStr(str1, str2) {
  let newStr = "";
  let size = str2.length;

  for (let i = 0; i < str1.length; i++) {
    if (str1.slice(i, i + size) === str2) {
      i += size - 1;
    } else {
      newStr += str1[i];
    }
  }
  return newStr.replace(/ +/g, " ").trim();
}

console.log(deleteStr("This is some text.", "is"));

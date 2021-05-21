function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
    console.log(s);
  } catch (error) {
    console.log("s.split is not a function");
  }
}
reverseString(5);

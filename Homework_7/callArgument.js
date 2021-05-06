function printAfter(str) {
  console.log("Hello, world");
  return str();
}
const print = () => console.log("Elon Musk");
printAfter(print);
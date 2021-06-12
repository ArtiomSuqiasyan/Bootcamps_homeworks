function randomNumber(min, max) {
  return min + Math.random() * (max - min);
}
randomNumber(1, 5);

function randomInteger(min, max) {
  let randomNumber = min + Math.random() * (max - min);
  return Math.round(randomNumber);
}

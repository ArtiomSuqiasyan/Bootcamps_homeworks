alert( 1.35.toFixed(1) ); // 1.4
alert( 6.35.toFixed(1) ); // 6.3
//due to the properties of DS with decimal numbers

//Is a infitive loop, because i will never be equal to 10 due to the properties of JS with decimal numbers
let i = 0;
while (i != 10) {
  i += 0.2;
}
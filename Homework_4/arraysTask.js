//Ex1
let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
alert(fruits.length); // ? === 4

//Ex2
let arr = ["a", "b"];
arr.push(function() {
  alert( this );
})
arr[2](); // ? [a, b, function()]

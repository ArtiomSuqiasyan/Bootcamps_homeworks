let num1 = prompt("Please, enter a number");
let num2 = prompt("Please, enter a number");
if(isNaN(+num1) || isNaN(+num2)){
    alert("Please, enter only number")
} else{ 
    alert(+num1 + +num2)
}
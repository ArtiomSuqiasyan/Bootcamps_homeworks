function showTheSign() {
  let num = +prompt("Please, enter a number");
  if(!isFinite(num)){
      alert("Please, enter only number!");
      return
  }
  if (num > 0) {
    alert(1);
  } else if (num < 0) {
    alert(-1);
  } else {
    alert(0);
  }
}

showTheSign();

let tacToe = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
function playTacToe() {
  let count = 0;
  while (count < 4) {
    let x = Math.round(Math.random() * 2);
    let y = Math.round(Math.random() * 2);
    let x1 = Math.round(Math.random() * 2);
    let y1 = Math.round(Math.random() * 2);
    if (tacToe[x][y] === 0) {
      if (tacToe[x1][y1] === 0 && x !== x1) {
        tacToe[x][y] = "X";
        tacToe[x1][y1] = "Y";
        count++;
      }
    }
  }
  for (let i = 0; i < tacToe.length; i++) {
    for (let j = 0; j < tacToe[i].length; j++) {
      if (tacToe[i][j] === 0) {
        tacToe[i][j] = "X";
      }
    }
  }
  let arr1 = [];
  for (let i = 0; i < tacToe.length; i++) {
    if (!tacToe[i].includes("Y") && !tacToe[i].includes(0)) {
      return "Player 1 win";
    } else if (!tacToe[i].includes("X") && !tacToe[i].includes(0)) {
      return "Player 2 win";
    }
    arr1.push(tacToe[i][i]);
  }
  let arr2 = [];
  let i = 0;
  let j = 2;
  while (i < 3) {
    arr2.push(tacToe[i][j]);
    i++;
    j--;
  }
  if (!arr1.includes("Y") || !arr2.includes("Y")) {
    return "Player 1 win";
  }
  if (!arr1.includes("X") || !arr2.includes("X")) {
    return "Player 2 win";
  }
  for (let i = 0; i < tacToe.length; i++) {
    let arr = [];
    for (let j = 0; j < tacToe[i].length; j++) {
      arr.push(tacToe[j][i]);
    }
    if (!arr.includes("Y")) {
      return "Player 1 win";
    }
    if (!arr.includes("X")) {
      return "Player 2 win";
    }
  }
  return "Draw";
}
console.log(playTacToe(), tacToe);

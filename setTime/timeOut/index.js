// const result = document.querySelector("#result");
// const startBtn = document.querySelector("#start");

// function getTime() {
//   let minutes = document.querySelector("#minutes").value;
//   minutes = Number(minutes)
//   let timerId = setInterval(showTime, 1000)
//   function showTime(min, sec = 0) {
//     if (sec === 0) {
//       sec = 60;
//       min--;
//     }
//     sec--;

//     let timer = `${min}: ${sec}`;
//     if (min === 0 && sec === 0) {
//       result.innerText = "finish";
//       clearInterval(timerId);
//     }
//     result.innerText = timer;
//   }
// }

// startBtn.addEventListener("click", getTime)

function a() {
  function getTime(min, sec = 0) {
    if (sec === 0) {
      sec = 60;
      min--;
    }
    sec--;
    if (min === 0 && sec === 0) {
      clearInterval(setInterval(a, 1000))
      return "finish";
    }
    console.log(min, sec);
    setInterval(getTime, 1000);
  }
  getTime(2)
}

a()


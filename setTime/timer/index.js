const result = document.querySelector("#result");
const startBtn = document.querySelector("#start");

let timerId;

function startTimer() {
  let minutes = document.querySelector("#minutes").value;
  startBtn.disabled = true;
  function getTime(min, sec = 0) {
    min = Number(min);
    if (sec === 0) {
      sec = 60;
      min--;
    }
    sec--;

    let timer = `${min}: ${sec}`;
    if (min === 0 && sec === 0) {
      timer = "finish";
      result.innerText = timer;
      return "finish";
    }
    result.innerText = timer;
    timerId = setTimeout(getTime, 1000, min, sec);
    return timerId;
  }
  getTime(minutes);
}

startBtn.addEventListener("click", startTimer);

const stopBtn = document.querySelector("#stop");

function stopTimer() {
  clearTimeout(timerId);
}

stopBtn.addEventListener("click", stopTimer);

const continueBtn = document.querySelector("#continue");

function continueTimer() {
  let res = document.querySelector("#result").textContent;
  let minute = res.slice(0, 1);
  let second = res.slice(3);
  function continues(min, sec) {
    min = Number(min);
    sec = Number(sec);
    if (sec === 0) {
      sec = 60;
      min--;
    }
    sec--;

    let timer = `${min}: ${sec}`;
    if (min === 0 && sec === 0) {
      timer = "finish";
      result.innerText = timer;
      return "finish";
    }
    result.innerText = timer;
    timerId = setTimeout(continues, 1000, min, sec);
    return timerId;
  }
  continues(minute, second);
}

continueBtn.addEventListener("click", continueTimer);

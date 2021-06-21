const timeButton = document.querySelector("#timeButton");
const timeContainer = document.querySelector("#timePlace");
const timeCont = document.querySelector("#timeContainer");
timeButton.addEventListener("click", function () {
  timeCont.style.display = "block";
  timeCont.style.opacity = 1;
  showTime();
});
function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let time = h + ":" + m + ":" + s;

  timeContainer.innerText = time;
  setTimeout(showTime, 1000);
}

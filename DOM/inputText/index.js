const Input = document.querySelector("#input");
const text = document.querySelector("#text");

function copyInput(event) {
  text.innerText = event.target.value;
}

Input.addEventListener("keyup", function (e) {
  copyInput(e);
});

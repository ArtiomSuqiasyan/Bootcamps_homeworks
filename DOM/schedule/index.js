const li = document.querySelectorAll(".schedule");

li[0].addEventListener("click", () => li[0].classList.add("done"));

for (let i = 1; i < li.length; i++) {
  li[i].addEventListener("click", () => {
    if (li[i - 1].classList.contains("done")) {
      li[i].classList.add("done");
    }
  });
}

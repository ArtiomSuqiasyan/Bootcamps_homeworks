const slides = document.querySelectorAll("img");
let i = 0;

const slidesLeft = () => {
  const btnLeft = document.querySelector(".btnLeft");
  btnLeft.addEventListener("click", () => {
    if (i === 0) {
      slides[i].classList.remove("block");
      i = slides.length - 1;
      slides[i].classList.add("block");
    } else {
      slides[i].classList.remove("block");
      i--;
      slides[i].classList.add("block");
    }
  });
};
slidesLeft();

const slidesRight = () => {
  const btnRight = document.querySelector(".btnRight");
  btnRight.addEventListener("click", () => {
    if (i === slides.length - 1) {
      slides[i].classList.remove("block");
      i = 0;
      slides[i].classList.add("block");
    } else {
      slides[i].classList.remove("block");
      i++;
      slides[i].classList.add("block");
    }
  });
};
slidesRight();

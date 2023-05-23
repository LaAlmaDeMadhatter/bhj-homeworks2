const slides = Array.from(document.querySelectorAll(".slider__item"));

const btnLeft = document.querySelector(".slider__arrow_prev");

const btnRight = document.querySelector(".slider__arrow_next");

btnLeft.onclick = () => {
  let active = slides.findIndex((value) =>
    value.classList.contains("slider__item_active")
  );
  slides[active].classList.remove("slider__item_active");
  active !== slides.length - 1 ? active++ : (active = 0);

  slides[active].classList.add("slider__item_active");
};

btnRight.onclick = () => {
  let active = slides.findIndex((value) =>
    value.classList.contains("slider__item_active")
  );
  slides[active].classList.remove("slider__item_active");
  active <= 0 ? (active = slides.length - 1) : active--;

  slides[active].classList.add("slider__item_active");
};

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

updateButtons();

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  updateSlider();
  updateButtons();
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  updateSlider();
  updateButtons();
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function updateButtons() {
  if (currentIndex === 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }

  if (currentIndex === slides.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }
}

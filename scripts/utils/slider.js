const sliderClose = document.querySelector(".sliderClose");

export function displaySlider() {
  const slider = document.getElementById("slider");
  slider.style.display = "block";
  sliderClose.focus();
}

function closeSlider() {
  const slider = document.getElementById("slider");
  slider.style.display = "none";
}
//close Slider Event

sliderClose.addEventListener("click", () => {
  closeSlider();
});

// close slider using escape Button
window.addEventListener("keyup", (e) => {
  e.key === "Escape" && closeSlider();
});

const slider = document.getElementById("slider");
function displaySlider() {
  slider.style.display = "block";
}

function closeSlider() {
  const slider = document.getElementById("slider");
  const sliderContent = document.querySelector(".mediaLink");
  slider.style.display = "none";
  sliderContent.focus();
}
//close slider on click
const closeBtn = document.querySelector(".sliderClose");
closeBtn.addEventListener("click", closeSlider);

// close slider using escape Button
window.addEventListener("keyup", (e) => {
  if (e.key === "Escape" && slider.style.display === "block") {
    closeSlider();
  }
});

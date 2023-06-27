function displaySlider() {
  const slider = document.getElementById("slider");
  slider.style.display = "block";
}
function closeSlider() {
  const slider = document.getElementById("slider");
  slider.style.display = "none";
}
// close slider using escape Button
window.addEventListener("keyup", (e) => {
  e.key === "Escape" && closeSlider();
});

import SliderFactory from "../factory/sliderFactory.js";
export default class Slider {
  constructor(media, folder) {
    this.media = media;
    this.folder = folder;
  }

  createMediaSlider() {
    let names = [];
    let titles = [];
    let currentIndex = 0;
    const currentImage = document.querySelectorAll(".mediaLink");
    const previousBtn = document.querySelector("#previous");
    const nextBtn = document.querySelector("#next");
    //
    currentImage.forEach((el, index) => {
      // create  names and titles
      names.push(el.name);
      titles.push(el.title);
      // create slider on click
      el.addEventListener("click", () => {
        currentIndex = index;
        new SliderFactory(names, titles, this.folder, index);
      });
    });
    //go to Previous Slide
    previousBtn.addEventListener("click", () => {
      currentIndex = this.previous(names, titles, currentIndex);
    });
    //go to Next Slide
    nextBtn.addEventListener("click", () => {
      currentIndex = this.next(names, titles, currentIndex);
    });
    //go to Previuos / Next using arrowKeys
    window.addEventListener("keyup", (e) => {
      e.key === "ArrowLeft" &&
        (currentIndex = this.previous(names, titles, currentIndex));
      e.key === "ArrowRight" &&
        (currentIndex = this.next(names, titles, currentIndex));
    });
  }

  previous(names, titles, currentIndex) {
    const isFirstSlide = currentIndex === 0;
    currentIndex = isFirstSlide ? names.length - 1 : currentIndex - 1;
    new SliderFactory(names, titles, this.folder, currentIndex);
    return currentIndex;
  }

  next(names, titles, currentIndex) {
    const isLastSlide = currentIndex === names.length - 1;
    currentIndex = isLastSlide ? 0 : currentIndex + 1;
    new SliderFactory(names, titles, this.folder, currentIndex);
    return currentIndex;
  }
}

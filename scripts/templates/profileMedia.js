import { displaySlider } from "../utils/slider.js";

export default class ProfileMedia {
  constructor(media, folder) {
    this.media = media;
    this.folder = folder;
  }
  createMediaImage() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("mediaCard");
    $wrapper.addEventListener("click", () => {
      displaySlider();
    });
    const createImage = `
          <a  class="mediaLink" href="#" name="${this.media.image}" title="${
      this.media.title
    }" aria-label="Lilac breasted roller, closeup view" ></a>
          <div class="mediaImg">
            <img class="mediaImg" 
                src="${`/assets/photographers/${this.folder}/${this.media.image}`}" 
                alt="${this.media.title}">
                name="Lilac_breasted_roller"
          </div>
          <div class="mediaDescription">
            <h3 class="mediaCardTitle">${this.media.title}</h3>
            <div class="likes">
              <span>${this.media.likes}</span>
              <img class="likes-img" src="/assets/icons/heart.png" alt="likes">
            </div>
          </div>
        `;
    $wrapper.innerHTML = createImage;
    return $wrapper;
  }
  createMediaVideo() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("mediaCard");
    $wrapper.addEventListener("click", () => {
      displaySlider();
    });
    const createVideo = `
      <a  class="mediaLink" href="#" name="${this.media.video}" title="${
      this.media.title
    }" aria-label="Lilac breasted roller, closeup view" ></a>
      <video  
        class"video"
        loop 
        muted
        src="${`/assets/photographers/${this.folder}/${this.media.video}`}" 
        name="Lilac_breasted_roller"
        controls="">
      </video>
      <div class="mediaDescription">
        <h3 class="mediaCardTitle">${this.media.title}</h3>
        <div class="likes">
          <span>${this.media.likes}</span>
          <img class="likes-img" src="/assets/icons/heart.png" alt="likes">
        </div>
      </div>
    `;
    $wrapper.innerHTML = createVideo;
    return $wrapper;
  }
}

// createMediaSlider() {
//   const $wrapper = document.createElement("div");
//   $wrapper.classList.add("slider-wrapper");

//   const createSlider = `
//     <div class="slider" aria-label="image-closeup view">
//       <button class="sliderClose" onclick="closeSlider()">
//         <img src="assets/icons/closeSlider.svg" name="Close Contact form" />
//       </button>
//       <div class="slider-content">
//         <button>
//           <img class="slider-icon" src="/assets/icons/arrowLeft.png" alt="preview" name="Lilac breasted roller">
//         </button>
//         <div>
//           <img class="slider-img" src="/assets/photographers/Ellie Rose/Architecture_Water_on_Modern.jpg" alt="">
//           <h3 class="slider-title">Arc en ciel</h3>
//         </div>
//         <button>
//           <img class="slider-icon" src="/assets/icons/arrowRight.png" alt="next">
//         </button>
//       </div>
//     </div>
//   `;
//   $wrapper.innerHTML = createSlider;
//   return $wrapper;
// }

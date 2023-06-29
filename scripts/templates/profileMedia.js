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
          <a tabindex="0" class="mediaLink" href="#" name="${
            this.media.image
          }" title="${
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
      <a class="mediaLink" href="#" name="${this.media.video}" title="${
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


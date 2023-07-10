import likedDisliked from "../constructors/likedDisliked.js";
export default class ProfileMedia {
  constructor(media, folder) {
    this.media = media;
    this.folder = folder;
  }
  createMediaImage() {
    //get likes state and count
    const { addLiked, likesCount } = likedDisliked(this.media);
    //
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("mediaCard");
    const createImage = `
            <a onclick="displaySlider()" tabindex="0" class="mediaLink" href="#" name="${
              this.media.image
            }" title="${
      this.media.title
    }" aria-label="Lilac breasted roller, closeup view" >
    <img class="mediaImg" 
    src="${`assets/photographers/${this.folder}/${this.media.image}`}" 
    alt="${this.media.title}">
    name="Lilac_breasted_roller"
            </a>
            
          <div class="mediaDescription">
            <h3 class="mediaCardTitle">${this.media.title}</h3>
            <div class="likes">
              <span id="likesCount-${this.media.id}">${likesCount}</span>
              <button class="likes-btn" onclick="like(${
                this.media.id
              },${likesCount})">
                <img class="likes-img" src="assets/icons/heart.png" alt="likes">
                <img class="likes-img-liked ${addLiked}" id="liked-${
      this.media.id
    }" src="assets/icons/heart1.png" alt="likes">
              </button>
            </div>
          </div>
        `;
    $wrapper.innerHTML = createImage;
    return $wrapper;
  }

  createMediaVideo() {
    //get likes state and count
    const { addLiked, likesCount } = likedDisliked(this.media);
    //
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("mediaCard");
    const createVideo = `
      
      <a onclick="displaySlider()" tabindex="0" class="mediaLink" href="#" name="${
        this.media.video
      }" title="${
      this.media.title
    }" aria-label="Lilac breasted roller, closeup view" >
      <video  
        tabindex="-1"
        class"video"
        loop 
        muted
        src="${`assets/photographers/${this.folder}/${this.media.video}`}" 
        name="Lilac_breasted_roller"
        controls="">
      </video></a>
      <div class="mediaDescription">
        <h3 class="mediaCardTitle">${this.media.title}</h3>
        <div class="likes">
          <span id="likesCount-${this.media.id}">${likesCount}</span>
          <button class="likes-btn"  onclick="like(${
            this.media.id
          },${likesCount})">
            <img class="likes-img" src="assets/icons/heart.png" alt="likes">
            <img class="likes-img-liked ${addLiked}" id="liked-${
      this.media.id
    }" src="assets/icons/heart1.png" alt="likes">
          </button>
        </div>
      </div>
    `;
    $wrapper.innerHTML = createVideo;
    return $wrapper;
  }
}

// createMediaImage() {
//   const $wrapper = document.createElement("div");
//   $wrapper.classList.add("mediaCard");
//   const createImage = `
//         <div class="mediaImg">
//           <a onclick="displaySlider()" tabindex="0" class="mediaLink" href="#" name="${
//             this.media.image}" title="${this.media.title}" aria-label="Lilac breasted roller, closeup view" ></a>
//           <img class="mediaImg"
//               src="${`assets/photographers/${this.folder}/${this.media.image}`}"
//               alt="${this.media.title}">
//               name="Lilac_breasted_roller"
//         </div>
//         <div class="mediaDescription">
//           <h3 class="mediaCardTitle">${this.media.title}</h3>
//           <div class="likes">
//             <span id="likesCount-${this.media.id}">${this.media.likes}</span>
//             <button class="likes-btn" onclick="like(${this.media.id},${
//     this.media.likes
//   })">
//               <img class="likes-img" src="assets/icons/heart.png" alt="likes">
//               <img class="likes-img-liked" id="liked-${
//                 this.media.id
//               }" src="assets/icons/heart1.png" alt="likes">
//             </button>
//           </div>
//         </div>
//       `;
//   $wrapper.innerHTML = createImage;
//   return $wrapper;
// }

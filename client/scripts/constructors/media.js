import MediaFactory from "../factory/mediaFactory.js";

export default function createMedia(media, folder, profileId) {
  const cardsWrapper = document.querySelector(".media");
  //clear all media before creating, else after sorting will double the content
  cardsWrapper.innerHTML = "";
  //
  media.forEach((el) => {
    new MediaFactory(el, folder, cardsWrapper);
  });
}

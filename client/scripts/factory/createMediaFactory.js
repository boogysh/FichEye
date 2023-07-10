import ProfileMedia from "../templates/profileMedia.js";

class CreateMediaFactory {
  constructor(media, folder) {
    this.media = media;
    this.folder = folder;
    this.cardsWrapper = document.querySelector(".media");

    //clear all media before sorting
    this.cardsWrapper.innerHTML = "";
    //
    media.forEach((el) => {
      const TemplateMedia = new ProfileMedia(el, this.folder);
      //media factory
      el.image &&
        this.cardsWrapper.appendChild(TemplateMedia.createMediaImage());
      el.video &&
        this.cardsWrapper.appendChild(TemplateMedia.createMediaVideo());
    });
  }
}
export default CreateMediaFactory;

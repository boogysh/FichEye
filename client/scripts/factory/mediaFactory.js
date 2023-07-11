import ProfileMedia from "../templates/profileMedia.js";

export default class MediaFactory {
  constructor(mediaElement, folder, cardsWrapper) {
    this.media = mediaElement;
    this.folder = folder;
    this.cardsWrapper = cardsWrapper;
    //
    const TemplateMedia = new ProfileMedia(
      mediaElement,
      this.folder,
    );
    //media factory
    mediaElement.image &&
      this.cardsWrapper.appendChild(TemplateMedia.createMediaImage());
    mediaElement.video &&
      this.cardsWrapper.appendChild(TemplateMedia.createMediaVideo());
  }
}

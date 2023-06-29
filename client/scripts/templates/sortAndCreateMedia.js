import ProfileMedia from "../templates/profileMedia.js";
import Slider from "./profileMediaSlider.js";
class SortAndCreateMedia {
  constructor(media, folder) {
    this.media = media;
    this.folder = folder;
    this.wrapper = document.querySelector(".sort-btn-container");
  }
  createMedia(media) {
    const cardsWrapper = document.querySelector(".media");
    //clear all media before sorting
    cardsWrapper.innerHTML = "";
    media.forEach((el) => {
      const TemplateMedia = new ProfileMedia(el, this.folder);
      //media factory
      el.image && cardsWrapper.appendChild(TemplateMedia.createMediaImage());
      el.video && cardsWrapper.appendChild(TemplateMedia.createMediaVideo());
    });
  }
  // SORT BY POPULARITY
  byPopularity() {
    this.media.sort((a, b) => {
      return b.likes - a.likes;
    });
    return this.media;
  }
  // SORT BY DATE
  byDate() {
    this.media.sort((a, b) => {
      return new Date(b.date).valueOf() - new Date(a.date).valueOf();
    });
    return this.media;
  }
  // SORT BY TITLE
  byTitle() {
    this.media.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
    });
    return this.media;
  }

  sortAndCreate(sortedResult, sortType) {
    sortedResult = sortType;
    this.createMedia(sortedResult);
    new Slider(sortedResult, this.folder).createMediaSlider();
    return sortedResult;
  }

  init() {
    let sortedResult = [];
    const popularityBtn = document.querySelector("#popularity");
    const dateBtn = document.querySelector("#date");
    const titleBtn = document.querySelector("#title");
    //SORT BY DEFAULT === POPULARITY
    sortedResult = this.sortAndCreate(sortedResult, this.byPopularity());
    //
    //SORT BY POPULARITY
    popularityBtn.addEventListener("click", () => {
      sortedResult = this.sortAndCreate(sortedResult, this.byPopularity());
    });
    //sort by popularity then focused and using enter key
    popularityBtn.addEventListener("focus", () => {
      window.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          sortedResult = this.sortAndCreate(sortedResult, this.byPopularity());
        }
      });
    });
    // SORT BY DATE
    dateBtn.addEventListener("click", () => {
      sortedResult = this.sortAndCreate(sortedResult, this.byDate());
    });
    //sort by date then focused and using enter key
    dateBtn.addEventListener("focus", () => {
      window.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          sortedResult = this.sortAndCreate(sortedResult, this.byDate());
        }
      });
    });
    //SORT BY TITLE
    titleBtn.addEventListener("click", () => {
      sortedResult = this.sortAndCreate(sortedResult, this.byTitle());
    });
    //
    //sort by title then focused and using enter key
    titleBtn.addEventListener("focus", () => {
      window.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          sortedResult = this.sortAndCreate(sortedResult, this.byTitle());
        }
      });
    });
    //
    return sortedResult;
  }
}
export default SortAndCreateMedia;

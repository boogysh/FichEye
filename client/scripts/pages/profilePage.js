import CardApi from "../api/api.js";
import FolderFactory from "../factory/folderFactory.js";
import ProfileCard from "../templates/profileCard.js";
import CreateMediaFactory from "../factory/createMediaFactory.js";
import Slider from "../constructors/slider.js";
import ManageLikesAndPrice from "../constructors/likesAndPriceWidget.js";
import { sortByPopularity, sort } from "../constructors/sort.js";

class ProfilePage {
  constructor() {
    this.$profileWrapper = document.querySelector(".wrapper-header");
    this.cardsApi = new CardApi("./data/photographers.json");
    this.contactName = document.querySelector("#contact-name");
    this.$cardsWrapper = document.querySelector(".media");
    this.popularity = document.querySelector("#popularity");
    this.date = document.querySelector("#date");
    this.title = document.querySelector("#title");
    this.sortBtns = document.querySelectorAll(".sort-option-btn");
  }
  async profile() {
    //get id
    const id = parseInt(window.location.search.split("id=")[1]);
    //
    // get Profile Card & Profile Media
    const data = await this.cardsApi.getCards();
    const cards = data.photographers;
    const AllMedia = data.media;
    //
    //flter cards by id
    const filteredCards = cards.filter((card) => card.id === id);
    const card = filteredCards[0];
    //
    // manage Folder Name
    const folder = new FolderFactory(card).main();
    //
    // get profile Media
    const media = AllMedia.filter((item) => item.photographerId === id);
    //
    //generate Form contact Name
    this.contactName.innerHTML = `Contactez-moi<br>${card.name}`;
    //
    return {
      card,
      folder,
      media,
    };
  }

  async main() {
    //get profile 
    const { card, folder, media } = await this.profile();
    //
    //create profile Card
    const Template = new ProfileCard(card);
    this.$profileWrapper.appendChild(Template.createProfileHeader());
    //
    //CREATE MEDIA
    // media === newMedia !!!
    const newMedia = sortByPopularity(media);
    new CreateMediaFactory(newMedia, folder);
    new Slider(newMedia, folder).createMediaSlider();
    //
    //SORT MEDIA
    sort(folder, newMedia);
    //
    //MANAGE LIKES & PRICE
    new ManageLikesAndPrice(newMedia, card);
  }
}
const phPage = new ProfilePage();
phPage.main();



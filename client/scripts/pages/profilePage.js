import CardApi from "../api/api.js";
import ProfileCard from "../templates/profileCard.js";
import SortAndCreateMedia from "../templates/sortAndCreateMedia.js";
import ManageLikesAndPrice from "../templates/manageLikesAndPrice.js";
class photographerPage {
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
  async main() {
    //get id
    const id = parseInt(window.location.search.split("id=")[1]);
    //
    // get Profile Card & Profile Media
    const data = await this.cardsApi.getCards();
    const cards = data.photographers;
    const media = data.media;
    //
    //flter cards by id
    const filteredCards = cards.filter((card) => card.id === id);
    const card = filteredCards[0];
    //
    // manage Folder Name (FACTORY)
    const cardFirstName = card.name.split(" ")[0];
    const folder = cardFirstName.split("-").join(" ");
    //
    //create profile Card
    const Template = new ProfileCard(card);
    this.$profileWrapper.appendChild(Template.createProfileHeader());
    //
    //generate Form contact Name
    this.contactName.innerHTML = `Contactez-moi<br>${card.name}`;
    //
    // get profile Media
    const profileMedia = media.filter((item) => item.photographerId === id);
    //
    //SORT AND CREATE MEDIA
    new SortAndCreateMedia(profileMedia, folder).init();

    //MANAGE LIKES & PRICE
    new ManageLikesAndPrice(profileMedia, card);
  }
}
const phPage = new photographerPage();

phPage.main();

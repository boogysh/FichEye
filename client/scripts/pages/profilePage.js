import CardApi from "../api/api.js";
import FolderFactory from "../factory/folderFactory.js";
import ProfileCard from "../templates/profileCard.js";
import createMedia from "../constructors/media.js";
import slider from "../constructors/slider.js";
import manageLikesAndPrice from "../constructors/likesAndPriceWidget.js";
import { sortByPopularity, sort } from "../constructors/sort.js";

async function main() {
  //get profile
  const { card, folder, media } = await profile();
  //create profile Card
  const Template = new ProfileCard(card);
  const $profileWrapper = document.querySelector(".wrapper-header");
  $profileWrapper.appendChild(Template.createProfileHeader());
  //
  //CREATE MEDIA !!! media === newMedia !!!
  const newMedia = sortByPopularity(media);
  //
  createMedia(newMedia, folder);
  slider(folder);
  //
  //SORT MEDIA
  sort(folder, newMedia);
  //
  //MANAGE LIKES & PRICE
  manageLikesAndPrice(newMedia, card);
}
main();

async function profile() {
  const contactName = document.querySelector("#contact-name");
  const cardsApi = new CardApi("./data/photographers.json");
  //
  //get id
  const id = parseInt(new URLSearchParams(window.location.search).get("id"));
  //
  // get Profile Card & Profile Media
  const data = await cardsApi.getCards();
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
  contactName.innerHTML = `Contactez-moi<br>${card.name}`;
  //
  return {
    card,
    folder,
    media,
  };
}

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

// const f1 = () => {
//   const a = 5;
//   return a;
// };
// f1();
// console.log("f1:", f1()); //5

// const f2 = () => {
//   const b = f1();
//   console.log("b", b); //5
// };
// f2();

// const myMedia = JSON.parse(localStorage.getItem("sortedMedia"));

// class photographerPage {
//   constructor() {
//     this.$profileWrapper = document.querySelector(".wrapper-header");
//     this.cardsApi = new CardApi("./data/photographers.json");
//     this.$cardsWrapper = document.querySelector(".media");
//     this.popularityBtn = document.querySelector("#popularity");
//     this.dateBtn = document.querySelector("#date");
//     this.titleBtn = document.querySelector("#title");
//   }
//   async main() {
//     // let sortedMediaArray = [];
//     /////////////////
//     //get id
//     const id = parseInt(window.location.search.split("id=")[1]);
//     //
//     // get Profile Card & Profile Media
//     const data = await this.cardsApi.getCards();
//     const cards = data.photographers;
//     const media = data.media;
//     //
//     //flter cards by id
//     const filteredCards = cards.filter((card) => card.id === id);
//     const card = filteredCards[0];
//     //
//     // manage Folder Name (FACTORY)
//     const cardFirstName = card.name.split(" ")[0];
//     const folder = cardFirstName.split("-").join(" ");
//     //
//     // get profile Media
//     const profileMedia = media.filter((item) => item.photographerId === id);
//     //
//     //create profile Card
//     const Template = new ProfileCard(card);
//     this.$profileWrapper.appendChild(Template.createProfileHeader());
//     ////////////////////////////////////////////////////////////////
//     //SORT AND CREATE MEDIA
//     let sortedMedia = [];
//     //by default === popularity
//     sortedMedia = new SortMedia(profileMedia, folder).byPopularity();
//     new MediaFactory(sortedMedia, folder).create();
//     // SORT BY POPULARITY
//     this.popularityBtn.addEventListener("click", () => {
//       sortedMedia = new SortMedia(profileMedia, folder).byPopularity();
//       new MediaFactory(sortedMedia, folder).create();
//     });
//     // SORT BY DATE
//     this.dateBtn.addEventListener("click", () => {
//       sortedMedia = new SortMedia(profileMedia, folder).byDate();
//       new MediaFactory(sortedMedia, folder).create();
//     });
//     // SORT BY TITLE
//     this.titleBtn.addEventListener("click", () => {
//       sortedMedia = new SortMedia(profileMedia, folder).byTitle();
//       new MediaFactory(sortedMedia, folder).create();
//     });
//     //CREATE SLIDER
//     new Slider(folder).createMediaSlider();
//   }
// }
// const phPage = new photographerPage();

// phPage.main();

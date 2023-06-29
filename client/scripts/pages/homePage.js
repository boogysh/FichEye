import PhotographerCard from "../templates/photographerCard.js";
// import CardApi from "../api/api.js";
import CardApi from "../api/api.js";

export default class homePage {
  // class homePage {
  constructor() {
    this.$cardsWrapper = document.querySelector(".photographers_section");
    this.cardsApi = new CardApi("data/photographers.json");
  }

  async main() {
    console.log("homePage");
    const data = await this.cardsApi.getCards();
    const cards = data.photographers;
    console.log(cards);

    cards.forEach((card) => {
      const Template = new PhotographerCard(card);
      this.$cardsWrapper.appendChild(Template.createPhotographerCard());
    });
  }
}
const $homePage = new homePage();
$homePage.main();

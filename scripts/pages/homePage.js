class homePage {
  constructor() {
    this.$cardsWrapper = document.querySelector(".photographers_section");
    this.cardsApi = new CardApi("/data/photographers.json");
  }

  async main() {
    // const cards = await this.cardsApi.getCards();
    // console.log(cards);

    const data = await this.cardsApi.getCards();
    const cards = data.photographers
    console.log(cards);

    cards.forEach((card) => {
      const Template = new PhotographerCard(card);
      this.$cardsWrapper.appendChild(Template.createPhotographerCard());
    });
  }
}
const $homePage = new homePage();
$homePage.main();

// ///////////////////

// class photographerPage {
//   constructor() {
//     this.$cardsWrapper = document.querySelector(".photograph-header");
//     //   this.cardsApi = new CardApi("/data/photographers.json");
//   }
//   async main2() {
//     console.log("++++++++++");
//     const id = window.location.search.split("id=")[1];
//     console.log("id:", id);

//     function getPhotographerId() {
//       return new URL(location.href).searchParams.get("id");
//     }
//     getPhotographerId();
//     console.log(getPhotographerId);
//   }
// }

// const $homePage = new homePage();
// $homePage.main();
// const app2 = new photographerPage();
// app2.main2();

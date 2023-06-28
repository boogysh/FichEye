class ManageLikesAndPrice {
  constructor(media, card) {
    this.media = media;
    this.card = card;
    this.likesCount = document.querySelector(".likes-count");
    this.profilePrice = document.querySelector(".profile-price");
    // create likesArray
    this.likesArray = [];
    // push all likes in likesArray
    this.media.forEach((el) => {
      this.likesArray.push(el.likes);
    });
    this.likesSum(); // likes Count
    this.price(); // price/day
  }
  likesSum() {
    const likesSum = this.likesArray.reduce((sum, a) => sum + a, 0);
    this.likesCount.innerHTML = likesSum.toLocaleString();
  }
  price() {
    this.profilePrice.innerHTML = `${this.card.price}€ / jour`;
  }
}
export default ManageLikesAndPrice

// const initialValue = 0;
// const totalLikes = likesArray.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
// console.log("totalLikes", totalLikes);
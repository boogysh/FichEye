export default function manageLikesAndPrice(media, card) {
  let likesArray = [];
  // push all likes in likesArray
  media.forEach((el) => {
    likesArray.push(el.likes);
  });
  likesSum(likesArray); // likes Count
  price(card); // price/day
}
function likesSum(likesArray) {
  const likesCount = document.querySelector(".likes-count");
  const likesSum = likesArray.reduce((sum, a) => sum + a, 0);
  likesCount.innerHTML = likesSum.toLocaleString();
}
function price(card) {
  const profilePrice = document.querySelector(".profile-price");
  profilePrice.innerHTML = `${card.price}€ / jour`;
}

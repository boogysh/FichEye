 //reset localstorage onload page
    window.addEventListener("load", () => {
      localStorage.clear();
    });

function like(id, qty) {
  //get likes from localStorage
  const likesObj = localStorage.getItem("likes-" + id);
  const likes = JSON.parse(likesObj);
  //manage liked icon and get likes count
  const likedImg = document.getElementById("liked-" + id);
  likedImg.classList.toggle("liked");
  const isLikedImg = likedImg.classList.contains("liked");
  //get like status & count
  const isLiked = likes?.liked;
  const count = likes?.likes;
  //change likes count
  let newQty = qty;
  if (!isLiked) {
    newQty = count + 1;
    localStorage.setItem(
      "likes-" + id,
      JSON.stringify({ likes: newQty, liked: true })
    );
  } else if (isLiked) {
    newQty = count - 1;
    localStorage.setItem(
      "likes-" + id,
      JSON.stringify({ likes: newQty, liked: false })
    );
  }
  //update likes count for one card
  const likesCount = document.getElementById("likesCount-" + id);
  newQty && (likesCount.innerHTML = newQty);
  //get toal likes
  const sumLikesTag = document.querySelector(".likes-count");
  const sumLikes_str = document.querySelector(".likes-count").innerHTML;
  const sumLikes = parseInt(sumLikes_str);  
  //change total likes
  let newSumLikes = sumLikes;
  isLikedImg && (newSumLikes = sumLikes + 1);
  !isLikedImg && (newSumLikes = sumLikes - 1);

  sumLikesTag.innerHTML = `${newSumLikes}`;
}

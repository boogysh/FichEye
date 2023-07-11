export default function likedDisliked(media) {
  //get likes from local storage
  const likesObj = localStorage.getItem("likes-" + media.id);
  const likes = likesObj && JSON.parse(likesObj);
  //save likes to local storage
  !likes &&
    localStorage.setItem(
      "likes-" + media.id,
      JSON.stringify({ likes: media.likes, liked: false })
    );
  //add liked state if photo is liked
  let addLiked = "";
  const liked = likes?.liked === true;
  liked && (addLiked = "liked");
  !liked && (addLiked = "");
  //set likes Count on load page
  let likesCount;
  // likes && (likesCount = likes.likes);
  // !likes && (likesCount = media.likes);
  if (likes) {
    likesCount = likes.likes;
  } else {
    likesCount = media.likes;
  }
  return {
    addLiked,
    likesCount,
  };
}

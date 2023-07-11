import slider from "../constructors/slider.js";
import createMedia from "../constructors/media.js";

// SORT BY POPULARITY
export function sortByPopularity(media) {
  media.sort((a, b) => {
    return b.likes - a.likes;
  });
  return media;
}
// SORT BY DATE
function sortByDate(media) {
  media.sort((a, b) => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  });
  return media;
}
// SORT BY TITLE
function sortByTitle(media) {
  media.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
  });
  return media;
}
//sort create media & slider
function sortMedia(sortedResult, folder, sortType) {
  sortedResult = sortType;
  createMedia(sortedResult, folder);
  slider(folder);
  //focus first mediaElement
  const media = document.querySelectorAll(".mediaLink");
  media[0].focus();
  return sortedResult;
}
/////////////////////////////////////////////////////////////
export function sort(folder, media) {
  let sortedResult = [];
  const popularityBtn = document.querySelector("#popularity");
  const dateBtn = document.querySelector("#date");
  const titleBtn = document.querySelector("#title");
  //
  //SORT BY POPULARITY
  popularityBtn.addEventListener("click", () => {
    sortedResult = sortMedia(sortedResult, folder, sortByPopularity(media));
  });
  //sort by popularity then focused and using enter key
  window.addEventListener("keyup", (e) => {
    const active = document.activeElement.id === "popularity";
    if (e.key === "Enter" && active) {
      sortedResult = sortMedia(sortedResult, folder, sortByPopularity(media));
    }
  });
  //
  // SORT BY DATE
  dateBtn.addEventListener("click", () => {
    sortedResult = sortMedia(sortedResult, folder, sortByDate(media));
  });
  //sort by date then focused and using enter key
  window.addEventListener("keyup", (e) => {
    const active = document.activeElement.id === "date";
    if (e.key === "Enter" && active) {
      sortedResult = sortMedia(sortedResult, folder, sortByDate(media));
    }
  });
  //
  //SORT BY TITLE
  titleBtn.addEventListener("click", () => {
    sortedResult = sortMedia(sortedResult, folder, sortByTitle(media));
  });
  //
  //sort by title then focused and using enter key
  window.addEventListener("keyup", (e) => {
    const active = document.activeElement.id === "title";
    if (e.key === "Enter" && active) {
      sortedResult = sortMedia(sortedResult, folder, sortByTitle(media));
    }
  });
  return sortedResult;
}

// import sortMedia from "./sortMedia.js";
// // import { sortMedia } from "../pages/profilePage.js";
// class Sort {
//   constructor(media, folder) {
//     this.media = media;
//     this.folder = folder;
//     this.wrapper = document.querySelector(".sort-btn-container");
//   }
//   // SORT BY POPULARITY
//   byPopularity() {
//     this.media.sort((a, b) => {
//       return b.likes - a.likes;
//     });
//     return this.media;
//   }
//   // SORT BY DATE
//   byDate() {
//     this.media.sort((a, b) => {
//       return new Date(b.date).valueOf() - new Date(a.date).valueOf();
//     });
//     return this.media;
//   }
//   // SORT BY TITLE
//   byTitle() {
//     this.media.sort((a, b) => {
//       if (a.title.toLowerCase() < b.title.toLowerCase()) {
//         return -1;
//       } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
//         return 1;
//       }
//     });
//     return this.media;
//   }

//   init() {
//     let sortedResult = [];
//     const popularityBtn = document.querySelector("#popularity");
//     const dateBtn = document.querySelector("#date");
//     const titleBtn = document.querySelector("#title");
//     //sort by default
//     sortedResult = this.byPopularity();
//     //
//     //SORT BY POPULARITY
//     popularityBtn.addEventListener("click", () => {
//       sortedResult = sortMedia(sortedResult, this.folder, this.byPopularity());
//     });
//     //sort by popularity then focused and using enter key
//     window.addEventListener("keyup", (e) => {
//       const active = document.activeElement.id === "popularity";
//       if (e.key === "Enter" && active) {
//         sortedResult = sortMedia(
//           sortedResult,
//           this.folder,
//           this.byPopularity()
//         );
//       }
//     });
//     // SORT BY DATE
//     dateBtn.addEventListener("click", () => {
//       sortedResult = sortMedia(sortedResult, this.folder, this.byDate());
//     });
//     //sort by date then focused and using enter key
//     window.addEventListener("keyup", (e) => {
//       const active = document.activeElement.id === "date";
//       if (e.key === "Enter" && active) {
//         sortedResult = sortMedia(sortedResult, this.folder, this.byDate());
//       }
//     });
//     //SORT BY TITLE
//     titleBtn.addEventListener("click", () => {
//       sortedResult = sortMedia(sortedResult, this.folder, this.byTitle());
//     });
//     //
//     //sort by title then focused and using enter key
//     window.addEventListener("keyup", (e) => {
//       const active = document.activeElement.id === "title";
//       if (e.key === "Enter" && active) {
//         sortedResult = sortMedia(sortedResult, this.folder, this.byTitle());
//       }
//     });
//     console.log("sortedresult", sortedResult);
//     return sortedResult;
//   }
// }
// export default Sort;

// import sortMedia from "./sortMedia.js";
// class Sort {
//   constructor(media, folder) {
//     this.media = media;
//     this.folder = folder;
//     this.wrapper = document.querySelector(".sort-btn-container");
//   }
//   // SORT BY POPULARITY
//   byPopularity() {
//     this.media.sort((a, b) => {
//       return b.likes - a.likes;
//     });
//     return this.media;
//   }
//   // SORT BY DATE
//   byDate() {
//     this.media.sort((a, b) => {
//       return new Date(b.date).valueOf() - new Date(a.date).valueOf();
//     });
//     return this.media;
//   }
//   // SORT BY TITLE
//   byTitle() {
//     this.media.sort((a, b) => {
//       if (a.title.toLowerCase() < b.title.toLowerCase()) {
//         return -1;
//       } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
//         return 1;
//       }
//     });
//     return this.media;
//   }

//   init() {
//     let sortedResult = [];
//     const popularityBtn = document.querySelector("#popularity");
//     const dateBtn = document.querySelector("#date");
//     const titleBtn = document.querySelector("#title");

//     //SORT BY POPULARITY
//     popularityBtn.addEventListener("click", () => {
//       sortedResult = sortMedia(
//         sortedResult,
//         this.folder,
//         this.byPopularity()
//       );
//     });
//     //sort by popularity then focused and using enter key
//     popularityBtn.addEventListener("focus", () => {
//       window.addEventListener("keyup", (e) => {
//         if (e.key === "Enter") {
//           sortedResult = sortMedia(
//             sortedResult,
//             this.folder,
//             this.byPopularity()
//           );
//         }
//       });
//     });
//     // SORT BY DATE
//     dateBtn.addEventListener("click", () => {
//       sortedResult = sortMedia(sortedResult, this.folder, this.byDate());
//     });
//     //sort by date then focused and using enter key
//     dateBtn.addEventListener("focus", () => {
//       window.addEventListener("keyup", (e) => {
//         if (e.key === "Enter") {
//           sortedResult = sortMedia(
//             sortedResult,
//             this.folder,
//             this.byDate()
//           );
//         }
//       });
//     });
//     //SORT BY TITLE
//     titleBtn.addEventListener("click", () => {
//       sortedResult = sortMedia(sortedResult, this.folder, this.byTitle());
//     });
//     //
//     //sort by title then focused and using enter key
//     titleBtn.addEventListener("focus", () => {
//       window.addEventListener("keyup", (e) => {
//         if (e.key === "Enter") {
//           sortedResult = sortMedia(
//             sortedResult,
//             this.folder,
//             this.byTitle()
//           );
//         }
//       });
//     });
//     return sortedResult;
//   }
// }
// export default Sort;

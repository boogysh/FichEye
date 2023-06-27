class SliderFactory {
  constructor(names, titles, folder, index) {
    this.names = names;
    this.titles = titles;
    this.folder = folder;
    this.index = index;
    this.wrapper = document.querySelector(".slider-images");
    //
    // console.log("names?????", this.names);
    //
    const name = this.names[index];
    const title = this.titles[this.index];
    const format = name.substring(name.lastIndexOf(".") + 1, name.length);
    //
    format === "jpg" &&
      this.image(
        `/assets/photographers/${this.folder}/${this.names[this.index]}`,
        title
      );
    format === "mp4" &&
      this.video(
        `/assets/photographers/${this.folder}/${this.names[this.index]}`,
        title
      );
  }

  image(src, title) {
    const newImage = `
      <img class="slider-img" src="${src}" alt="${title}" title="${title}" >
      <h3 class="slider-title">${title}</h3>
      `;
    this.wrapper.innerHTML = newImage;
  }
  video(src, title) {
    const newVideo = `
    <video 
      class="videoOne" 
      src="${src}" 
      controls
      loop>
    </video>
    <h3 class="slider-title">${title}</h3>
    `;
    this.wrapper.innerHTML = newVideo;
  }
}
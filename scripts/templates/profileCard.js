class ProfileCard {
  constructor(header) {
    this._header = header;
  }
  createProfileHeader() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("photograph-header");

    const profileContent = `
        <div class="header-item">
            <h2 class="header-name">${this._header.name}</h2>
            <p class="header-city">${this._header.city}, ${
      this._header.country
    }</p>
            <p class="header-tag">${this._header.tagline}</p>
        </div>
        <div class="header-item">
            <button  name="${`Contant me ${this._header.name}`} " class="contact_button" onclick="displayModal()">Contactez-moi</button>
        </div>
        <div class="header-item">
            <img class="header-img" 
                src="${`assets/photographers/${this._header.portrait}`}"
                alt="${this._header.name}"
            >
        </div>
    `;
    $wrapper.innerHTML = profileContent;
    return $wrapper;
  }
}

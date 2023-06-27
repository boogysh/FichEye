class PhotographerCard {
  constructor(card) {
    this._card = card;
  }
  createPhotographerCard() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("ph-card-wrapper");

    const photographerCard = `
            <a class="ph-card-link" href="photographer.html?id=${
              this._card.id
            }" aria-label="card">
                <img class="ph-image" 
                    alt="${this._card.name}"
                    src="${`assets/photographers/${this._card.portrait}`}"
                >    
                <h2 class="ph-name">${this._card.name}</h2>
            </a>
            <p class="ph-city">${this._card.city}, ${this._card.country}</p>
            <p class="ph-tag">${this._card.tagline}</p>
            <span class="ph-price">${this._card.price} €/jour</span>
        `;

    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}

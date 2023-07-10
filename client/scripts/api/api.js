export default class CardApi {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    this._url = url;
  }

  async getCards() {
    return fetch(this._url)
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.log("an error occurs", err));
  }
}

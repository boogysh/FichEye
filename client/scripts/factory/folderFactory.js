export default class FolderFactory {
  constructor(card) {
    this.card = card;
  }
  main() {
    // manage Folder Name (FACTORY)
    const cardFirstName = this.card.name.split(" ")[0];
    const folder = cardFirstName.split("-").join(" ");
    // console.log("folder:", folder);
    return folder;
  }
}

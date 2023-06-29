const sortBtn = document.querySelector("#sort-btn");
const sortBtnSelected = document.querySelector(".sort-btn-selected");
// const sortBtnContainer = document.querySelector(".sort-btn-container");
const sortGroup = document.querySelector(".sort-group");
const sortArrow = document.querySelector(".sort-arrow");
const optionsBtn = document.querySelectorAll(".sort-option-btn");
const selected = document.querySelector("#selected");
//
const popularity = document.querySelector("#popularity");
const date = document.querySelector("#date");
const title = document.querySelector("#title");

//TOGGLE SORT BUTTON
function toggleSortButton() {
  sortGroup.classList.toggle("open");
  sortArrow.classList.toggle("rotate");
  sortBtn.classList.toggle("open");
  sortBtnSelected.classList.toggle("open");
}
//CLOSE SORT BUTTON
function closeSortButton() {
  sortGroup.classList.remove("open");
  sortArrow.classList.remove("rotate");
  sortBtn.classList.remove("open");
  sortBtnSelected.classList.remove("open");
}
// close sortButton on focusout
document.addEventListener("focusout", (ev) => {
  // console.log(ev.relatedTarget);
  const selected = ev.relatedTarget?.id === "selected";
  const popularity = ev.relatedTarget?.id === "popularity";
  const date = ev.relatedTarget?.id === "date";
  const title = ev.relatedTarget?.id === "title";
  !selected && !popularity && !date && !title && closeSortButton();
});
// TOGGLE ARIA-EXPANDED
function toggleAriaExpanded() {
  // sortBtn.setAttribute(
  selected.setAttribute(
    "aria-expanded",
    `${!(sortBtn.getAttribute("aria-expanded") === "true")}`
  );
}
// SET ARIA-ACTIVEDESCENDANT
function setAriaActiveDescendant(btn) {
  // sortBtn.setAttribute("aria-activedescendant", btn.id);
  sortGroup.setAttribute("aria-activedescendant", btn.id);
}
// REMOVE ARIA-SELECTED
function removeAriaSelected() {
  optionsBtn.forEach((option) => {
    option.setAttribute("aria-selected", "false");
  });
}
//SET ARIA-SELECTED
function setAriaSelected(option) {
  option.setAttribute("aria-selected", "true");
}
//SHOW OPTION
const removeHidden = () => {
  optionsBtn.forEach((btn) => btn.classList.remove("hidden"));
};
//SHOW SELECTED OPTION LIKE "SELECTED" AND HIDE THE SAME VALUE IN OPTIONS LIST
const select = (btn, text, el) => {
  removeHidden();
  el.classList.add("hidden");
  selected.value = text;
  sortBtnSelected.innerHTML = text;
  toggleAriaExpanded();
  setAriaActiveDescendant(btn);
  removeAriaSelected();
  setAriaSelected(btn);
  toggleSortButton();
};
// ADD TEXT TO SELECTED OPTION, MANAGE ARIA-ACTIVEDESCENDANT & ARIA-SELECTED
optionsBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    const id1 = btn.id === "popularity";
    const id2 = btn.id === "date";
    const id3 = btn.id === "title";
    id1 && select(btn, "Popularité", popularity);
    id2 && select(btn, "Date", date);
    id3 && select(btn, "Titre", title);
  })
);
// ADD TEXT TO SELECTED OPTION, MANAGE ARIA-ACTIVEDESCENDANT & ARIA-SELECTED
// USING TAB & ENTER KEYS
optionsBtn.forEach((btn) => {
  btn.addEventListener("focus", () => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        const id1 = document.activeElement.id === "popularity";
        const id2 = document.activeElement.id === "date";
        const id3 = document.activeElement.id === "title";
        //
        id1 && select(btn, "Popularité", popularity);
        id2 && select(btn, "Date", date);
        id3 && select(btn, "Titre", title);
      }
    });
  });
});


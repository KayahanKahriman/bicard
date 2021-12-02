// Popup
const popup_links = document.querySelectorAll(".icon-grid-item-icon a");
const inline_popup = document.querySelector("#inline-content");
Array.from(popup_links).forEach((element) => {
  element.addEventListener("click", () => {
    inline_popup.classList.remove("hide-content");
    document.body.classList.add("body-overlay");
  });
});
document.addEventListener("click", (event) => {
  // console.log(event.target);
  if (event.target != inline_popup) {
    console.log("ok");
  }
});

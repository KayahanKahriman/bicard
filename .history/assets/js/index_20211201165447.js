// Popup
const popup_links = document.querySelectorAll(".icon-grid-item-icon a");
const inline_popup = document.querySelector("#inline-content");
const body_overlay = document.querySelector(".body-overlay");

Array.from(popup_links).forEach((element) => {
  element.addEventListener("click", () => {
    inline_popup.classList.remove("hide-content");
    document.body.classList.add("body-overlay");
  });
});
if (body_overlay) {
  body_overlay.addEventListener("click", () => {
    console.log("ok");
  });
}

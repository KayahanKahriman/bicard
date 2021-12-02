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

document.body.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target == body_overlay) {
    console.log("ok");
    inline_popup.classList.add("hide-content");
  }
});

// Popup
const popup_links = document.querySelectorAll(".icon-grid-item-icon a");
const inline_popup = document.querySelector("#inline-content");

Array.from(popup_links).forEach((element) => {
  element.addEventListener("click", () => {
    inline_popup.classList.remove("hide-content");
    document.body.classList.add("body-overlay");
  });
});

document.addEventListener("touchstart", (event) => {
  if (inline_popup.contains(event.target)) {
    console.log("Clicked Inside");
  } else {
    console.log("Clicked Outside / Elsewhere");
  }
});

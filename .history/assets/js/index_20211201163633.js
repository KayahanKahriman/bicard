// Popup
const popup_links = document.querySelectorAll(".icon-grid-item-icon a");
const inline_popup = document.querySelector("#inline-content");
Array.from(popup_links).forEach((element) => {
  element.addEventListener("click", function () {
    inline_popup.classList.remove("hide-content");
  });
});

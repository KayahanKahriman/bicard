// Popup
const popup_links = document.querySelectorAll(".icon-grid-item-icon a");
const inline_popup = document.querySelector("#inline-content");

function appender(container, adding, cssClass) {
  const containerEl = document.querySelector(container);
  const addingEl = document.createElement(adding);
  addingEl.classList.add(cssClass);
  containerEl.append(addingEl);
}

Array.from(popup_links).forEach((element) => {
  element.addEventListener("click", () => {
    setTimeout(function () {
      inline_popup.classList.remove("hide-content");
      appender("body", "span", "body-overlay");
    });
  });
});

document.addEventListener("touchstart", (event) => {
  if (!inline_popup.contains(event.target)) {
    const body_overlay = document.querySelector(".body-overlay");
    inline_popup.classList.add("hide-content");
    if (body_overlay) {
      body_overlay.remove();
    }
  }
});

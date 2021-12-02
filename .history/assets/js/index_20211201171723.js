// Popup

function appender(container, adding, content) {
  const containerEl = document.querySelector(container);
  const addingEl = document.createElement(adding);
  addingEl.textContent = content;
  containerEl.append(addingEl);
}

const popup_links = document.querySelectorAll(".icon-grid-item-icon a");
const inline_popup = document.querySelector("#inline-content");

Array.from(popup_links).forEach((element) => {
  element.addEventListener("click", () => {
    inline_popup.classList.remove("hide-content");

    appender("body", "span", "");
  });
});

document.addEventListener("touchstart", (event) => {
  console.log(event.target);
  if (inline_popup.contains(event.target)) {
    console.log("Clicked Inside");
  } else {
    inline_popup.classList.add("hide-content");
    document.body.classList.remove("body-overlay");
  }
});

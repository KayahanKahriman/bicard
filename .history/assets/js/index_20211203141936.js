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
    document.querySelector("#icon-grid").style.pointerEvents = "none";
    if (inline_popup) {
      inline_popup.classList.remove("hide-content");
    }
    appender("body", "span", "body-overlay");
  });
});

document.addEventListener("touchstart", (event) => {
  if (inline_popup) {
    if (!inline_popup.contains(event.target)) {
      const body_overlay = document.querySelector(".body-overlay");
      inline_popup.classList.add("hide-content");
      if (body_overlay) {
        body_overlay.remove();
        setTimeout(() => {
          document.querySelector("#icon-grid").style.pointerEvents = "initial";
        }, 500);
      }
    }
  }
});

// Nav
const toggle_nav_button = document.querySelector("#toggle-nav");
const mobile_nav = document.querySelector("#mobile-nav");

toggle_nav_button.addEventListener("touchstart", () => {
  appender("body", "span", "body-overlay");
  mobile_nav.classList.remove("hide-mobile-nav");
});

document.addEventListener("touchstart", () => {
  if (mobile_nav) {
    if (!mobile_nav.contains(event.target)) {
      const body_overlay = document.querySelector(".body-overlay");
      mobile_nav.classList.add("hide-mobile-nav");
      if (body_overlay) {
        body_overlay.remove();
        setTimeout(() => {
          document.querySelector("#icon-grid").style.pointerEvents = "initial";
        }, 500);
      }
    }
  }
});

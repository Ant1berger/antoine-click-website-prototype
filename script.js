document.documentElement.classList.add("has-js");

const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const preview = document.querySelector(".component-preview");
const controls = document.querySelector(".controls");
const siteHeader = document.querySelector("[data-header]");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
    }
  });
}

if (preview && controls) {
  controls.addEventListener("change", (event) => {
    const input = event.target;

    if (!(input instanceof HTMLInputElement)) {
      return;
    }

    if (input.name === "align") {
      preview.dataset.align = input.value;
    }

    if (input.name === "tone") {
      preview.dataset.tone = input.value;
    }
  });
}

if (siteHeader) {
  const setHeaderState = () => {
    siteHeader.classList.toggle("is-compact", window.scrollY > 32);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });
}

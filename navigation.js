const navigationToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector("#site-nav");

if (navigationToggle && navigation) {
  const toggleLabel = navigationToggle.querySelector(".visually-hidden");
  const desktopNavigation = window.matchMedia("(min-width: 42.0625rem)");

  const setNavigationState = (isOpen) => {
    navigationToggle.setAttribute("aria-expanded", String(isOpen));
    toggleLabel.textContent = isOpen ? "Fermer le menu" : "Ouvrir le menu";
    navigation.classList.toggle("is-open", isOpen);
    navigation.setAttribute("aria-hidden", String(!isOpen));
    navigation.inert = !isOpen;
  };

  const updateNavigationMode = () => {
    setNavigationState(desktopNavigation.matches);
  };

  navigationToggle.addEventListener("click", () => {
    const isOpen = navigationToggle.getAttribute("aria-expanded") === "true";

    setNavigationState(!isOpen);
  });

  desktopNavigation.addEventListener("change", updateNavigationMode);
  updateNavigationMode();
}

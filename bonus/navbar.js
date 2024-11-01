(() => {
  const navbarStyles = {
    container: "navbar",
    item: "navbar__item",
    activeItem: "navbar__item--active",
    underline: "navbar__underline",
  };

  renderNavbar(codeChallengeGlobalVariables.cities);
  window.addEventListener("resize", runNavbarAnimation);
  window.addEventListener("cityUpdated", setActiveNavbarItem);
  window.addEventListener("popstate", setActiveNavbarItem);
  window.addEventListener("load", setActiveNavbarItem);

  function renderNavbar(cities) {
    const root = document.getElementById("header");

    const navbarContainer = document.createElement("nav");
    navbarContainer.classList.add(navbarStyles.container);

    cities.forEach((city) => {
      const navItem = createNavbarItem(city);
      navbarContainer.appendChild(navItem);
    });

    setupNavigationHandler(navbarContainer);

    const underline = createNavbarUnderline();
    navbarContainer.appendChild(underline);

    root.appendChild(navbarContainer);
  }

  function createNavbarItem({ section, label }) {
    const item = document.createElement("a");

    item.classList.add(navbarStyles.item);
    item.href = "#";
    item.id = section;
    item.innerHTML = label;
    item.addEventListener("click", (event) => {
      event.preventDefault();
    });

    return item;
  }

  function createNavbarUnderline() {
    const underline = document.createElement("div");
    underline.classList.add(navbarStyles.underline);

    return underline;
  }

  function setupNavigationHandler(navContainer) {
    const navItems = navContainer.childNodes;

    navItems.forEach((node) => {
      node.addEventListener("click", () => {
        if (!node.classList.contains(navbarStyles.activeItem)) {
          updateURL(node.id);
        }
      });
    });
  }

  function clearActiveNavbarItem() {
    const items = document.getElementsByClassName(navbarStyles.item);
    for (let node of items) {
      node.classList.remove(navbarStyles.activeItem);
    }
  }

  function runNavbarAnimation() {
    const activeItem = document.getElementsByClassName(
      navbarStyles.activeItem
    )[0];
    const underline = document.getElementsByClassName(
      navbarStyles.underline
    )[0];

    underline.style.width = `${activeItem.offsetWidth}px`;
    underline.style.left = `${activeItem.offsetLeft}px`;
  }

  function updateURL(city) {
    const baseUrl = window.location.href.split("?")[0];
    const newUrl = `${baseUrl}?city=${city}`;

    history.pushState(null, "", newUrl);

    // Navigate event is not supported in Safari, so we use custom event here
    // https://developer.mozilla.org/en-US/docs/Web/API/NavigateEvent
    window.dispatchEvent(new Event("cityUpdated"));
  }

  function setActiveNavbarItem() {
    const city = codeChallengeGlobalUtils.getCityFromUrl();
    const navbarIem = document.getElementById(city);

    if (city && navbarIem) {
      clearActiveNavbarItem();
      navbarIem.classList.add(navbarStyles.activeItem);
      runNavbarAnimation();
    }
  }
})();

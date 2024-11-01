(() => {
  const cities = [
    {
      section: "cupertino",
      label: "Cupertino",
    },
    {
      section: "new-york-city",
      label: "New York City",
    },
    {
      section: "london",
      label: "London",
    },
    {
      section: "amsterdam",
      label: "Amsterdam",
    },
    {
      section: "tokyo",
      label: "Tokyo",
    },
    {
      section: "hong-kong",
      label: "Hong Kong",
    },
    {
      section: "sydney",
      label: "Sydney",
    },
  ];

  const navbarStyles = {
    container: "navbar",
    item: "navbar__item",
    activeItem: "navbar__item--active",
    underline: "navbar__underline"
  };

  renderNavbar(cities);
  window.addEventListener("resize", runNavbarAnimation);

  function renderNavbar(cities) {
    const root = document.getElementById("root");

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
          clearActiveNavbarItem(navItems);
          setActiveNavbarItem(node);
        }
      });
    });
  }

  function clearActiveNavbarItem(navItems) {
    navItems.forEach((node) => {
      node.classList.remove(navbarStyles.activeItem);
    });
  }

  function setActiveNavbarItem(node) {
    node.classList.add(navbarStyles.activeItem);
    runNavbarAnimation();
  }

  function runNavbarAnimation() {
    const activeItem = document.getElementsByClassName(navbarStyles.activeItem)[0];
    const underline = document.getElementsByClassName(navbarStyles.underline)[0];

    underline.style.width = `${activeItem.offsetWidth}px`;
    underline.style.left = `${activeItem.offsetLeft}px`;
  }
})();

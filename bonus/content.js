(() => {
  const root = document.getElementById("content");
  let timeoutId;

  window.addEventListener("cityUpdated", setActiveCity);
  window.addEventListener("popstate", setActiveCity);
  window.addEventListener("load", setActiveCity);

  function setActiveCity() {
    clearContent();
    const city = codeChallengeGlobalUtils.getCityFromUrl();
    city ? renderContent(city) : renderEmptyContent();
  }

  function clearContent() {
    root.innerHTML = "";
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }

  function renderContent(city) {
    const clock = createClock(city);

    root.appendChild(clock);
  }

  function renderEmptyContent() {
    const container = document.createElement("div");
    container.innerHTML = "Please, select city";
    root.appendChild(container);
  }

  function createClock(city) {
    const container = document.createElement("div");
    const cityLabel = codeChallengeGlobalVariables.cities.find(
      ({ section }) => section === city
    ).label;
    const timeZone = getCityTimezone(city);
    const options = {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    function startTime() {
      const time = new Intl.DateTimeFormat("en-US", options).format(new Date());
      container.innerHTML = `Time in ${cityLabel}: ${time}`;
      timeoutId = setTimeout(startTime, 1000);
    }
    startTime();

    return container;
  }

  function getCityTimezone(city) {
    const cityTimezones = {
      "cupertino": "America/Los_Angeles",
      "new-york-city": "America/New_York",
      "london": "Europe/London",
      "amsterdam": "Europe/Amsterdam",
      "tokyo": "Asia/Tokyo",
      "hong-kong": "Asia/Hong_Kong",
      "sydney": "Australia/Sydney",
    };

    return cityTimezones[city];
  }
})();

const codeChallengeGlobalVariables = {
  cities: [
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
  ],
};

const codeChallengeGlobalUtils = {
  getCityFromUrl() {
    let city;
    const cityKeyword = "city=";

    try {
      city = window.location.href
        .split("?")
        .filter((urlPart) => urlPart.includes(cityKeyword))[0]
        .split(cityKeyword)[1];
    } catch {}

    return city;
  }
};

class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  };

  updateAverage(newAverage) {
    let badgeElement = this.headerElement.querySelector("span");
    badgeElement.innerHTML = "";

    badgeElement.textContent = newAverage;
  };
};

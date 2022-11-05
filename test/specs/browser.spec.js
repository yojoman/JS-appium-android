const { expect } = require("chai");

describe("Onliner.by", () => {
  it("Should open main page", async () => {
    await browser.url("https://www.onliner.by/");
    expect(await browser.getTitle()).to.be.equal("Onliner");
  });

  it("Logo is present and can be clicked", async () => {
    const websiteLogo = $(".//img[@alt='Onlíner']");
    await websiteLogo.click();
    expect(await websiteLogo.isDisplayed()).to.be.equal(true);
  });

  it("Should open About Company page", async () => {
    const aboutButton = $(".//a[contains(text(),'О компании')]");
    await aboutButton.scrollIntoView();
    await aboutButton.click();
    expect(await browser.getTitle()).to.be.equal("О сайте");
  });
});

const { expect } = require("chai");

describe("Finance analyzer mobile app", () => {
  it("App logo is present", async () => {
    const appLogo = $("android.widget.ImageView");
    expect(await appLogo.isDisplayed()).to.be.equal(true);
  });

  it("Add new item and verify it sum", async () => {
    const nameField = $(
      `android=${'resourceId("com.github.vitalliuss.financeanalyzer:id/autoCompleteTextViewExpenseName")'}`
    );
    await nameField.setValue("Milk");
    const priceField = $(
      `android=${'resourceId("com.github.vitalliuss.financeanalyzer:id/editTextExpenseAmount")'}`
    );
    await priceField.setValue("2");
    const labelField = $(
      `android=${'resourceId("com.github.vitalliuss.financeanalyzer:id/autoCompleteTextViewExpenseLabel")'}`
    );
    await labelField.setValue("food");
    const saveButton = $("android.widget.Button");
    await saveButton.click();
    const itemCost = $(
      `android=${'resourceId("com.github.vitalliuss.financeanalyzer:id/expenseAmount")'}`
    );
    expect(await itemCost.getText()).to.be.equal("2");
  });

  it("Open Numbers Only option from Statistics and verify totam sum", async () => {
    const statisticsButton = $("~Statistics");
    await statisticsButton.click();
    const statisticsViewButton = $("android.widget.Spinner");
    await statisticsViewButton.click();
    const numbersOnlyOption = $(
      `android=${'new UiSelector().className("android.widget.CheckedTextView").text("Numbers only")'}`
    );
    await numbersOnlyOption.click();
    const totalAmount = $(
      '//android.widget.TextView[@resource-id="com.github.vitalliuss.financeanalyzer:id/textViewGrandTotalData"]'
    );
    expect(await totalAmount.getText()).to.be.equal("2");
  });
});

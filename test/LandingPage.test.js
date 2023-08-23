import { Builder } from "selenium-webdriver";
import {
  commonRegistration,
  registrationFashion,
  registrationSantander,
} from "../pages/Landing.page.js";
import { expect } from "chai";

describe("Registration using different URL value", () => {
  let driver;

  beforeEach(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
  });

  afterEach(async () => {
    await driver.close();
  });

  it("As a user, I can regist new account in payever for Fashion succesfully", async function () {
    await commonRegistration.openNewWindow(driver, "fashion");
    await commonRegistration.fillFirstName(driver);
    await commonRegistration.fillLastName(driver);
    await commonRegistration.fillEmail(driver);
    await commonRegistration.fillPassword(driver);
    await commonRegistration.fillConfirmPass(driver);
    await commonRegistration.clickSignUp(driver);
    await commonRegistration.waitBusinessInformationForm(driver);
    await commonRegistration.fillBusinessStatus(driver);
    await registrationFashion.fillNameOnInvoice(driver);
    await commonRegistration.fillStatus(driver);
    await commonRegistration.fillSales(driver);
    await registrationFashion.fillIndustry(driver);
    await commonRegistration.fillCountryCode(driver);
    await registrationFashion.fillPhonenumber(driver);
    await commonRegistration.clickGetStarted(driver);
    await commonRegistration.waitGetStarted(driver);
    await commonRegistration.clickGetStartedOnWelcomeScreen(driver);
    await commonRegistration.waitFashionDashboard(driver);
    const iconTransaction = await registrationFashion.checkIconTransaction(
      driver
    );
    const iconCheckout = await registrationFashion.checkIconCheckout(driver);
    const iconConnect = await registrationFashion.checkIconConnect(driver);
    const iconProduct = await registrationFashion.checkIconProduct(driver);
    const iconShop = await registrationFashion.checkIconShop(driver);
    const iconSetting = await registrationFashion.checkIconSetting(driver);

    expect(iconTransaction).to.be.true;
    expect(iconCheckout).to.be.true;
    expect(iconConnect).to.be.true;
    expect(iconProduct).to.be.true;
    expect(iconShop).to.be.true;
    expect(iconSetting).to.be.true;

    await commonRegistration.wait(driver, 2000);
  });

  it("As a user, I can regist new account in payever for Santander succesfully", async function () {
    await commonRegistration.openNewWindow(driver, "santander");
    await commonRegistration.fillFirstName(driver);
    await commonRegistration.fillLastName(driver);
    await commonRegistration.fillEmail(driver);
    await commonRegistration.fillPassword(driver);
    await commonRegistration.fillConfirmPass(driver);
    await commonRegistration.clickSignUp(driver);
    await commonRegistration.waitBusinessInformationForm(driver);
    await commonRegistration.fillBusinessStatus(driver);
    await registrationSantander.fillCompanyName(driver);
    await commonRegistration.fillStatus(driver);
    await commonRegistration.fillSales(driver);
    await registrationSantander.fillIndustry(driver);
    await commonRegistration.fillCountryCode(driver);
    await registrationSantander.fillPhonenumber(driver);
    await registrationSantander.fillVatNumber(driver);
    await commonRegistration.clickGetStarted(driver);
    await commonRegistration.waitGetStarted(driver);
    await commonRegistration.clickGetStartedOnWelcomeScreen(driver);
    await commonRegistration.waitFashionDashboard(driver);

    const iconTransaction = await registrationSantander.checkIconTransaction(
      driver
    );
    const iconCheckout = await registrationSantander.checkIconCheckout(driver);
    const iconConnect = await registrationSantander.checkIconConnect(driver);
    const iconPointOfSale = await registrationSantander.checkIconPointOfSale(
      driver
    );
    const iconSetting = await registrationSantander.checkIconSetting(driver);

    expect(iconTransaction).to.be.true;
    expect(iconCheckout).to.be.true;
    expect(iconConnect).to.be.true;
    expect(iconPointOfSale).to.be.true;
    expect(iconSetting).to.be.true;

    await commonRegistration.wait(driver, 2000);
  });
});

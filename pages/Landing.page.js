import { By, until } from "selenium-webdriver";

export const commonRegistration = {
  openNewWindow: async (driver, value) => {
    await driver.get(
      `https://commerceos.staging.devpayever.com/registration/${value}`
    );
    await driver.wait(
      until.elementLocated(By.xpath(`//div[@class='entry-layout']`)),
      10000
    );
  },

  fillFirstName: async (driver) => {
    await driver
      .findElement(By.xpath('//span[contains(text(), "First name")]'))
      .click();
    const firstNameElement = await driver.findElement(
      By.xpath('//input[@formcontrolname="firstName"]')
    );
    await firstNameElement.sendKeys("Selenium");
  },

  fillLastName: async (driver) => {
    await driver
      .findElement(By.xpath('//span[contains(text(), "Last name")]'))
      .click();
    const lastNameElement = await driver.findElement(
      By.xpath('//input[@formcontrolname="lastName"]')
    );
    await lastNameElement.sendKeys("Test");
  },

  fillEmail: async (driver) => {
    let randomNum = Math.floor(Math.random() * 1000);
    await driver
      .findElement(By.xpath('//span[contains(text(), "Email")]'))
      .click();
    const emailElement = await driver.findElement(
      By.xpath('//input[@formcontrolname="email"]')
    );
    await emailElement.sendKeys(`seleniumjs${randomNum}@hotmail.com`);
  },

  fillPassword: async (driver) => {
    await driver
      .findElement(By.xpath('//span[contains(text(), "Password")]'))
      .click();
    const passwordElement = await driver.findElement(
      By.xpath('//input[@formcontrolname="password"]')
    );
    await passwordElement.sendKeys("Selenium@123");
  },

  fillConfirmPass: async (driver) => {
    await driver
      .findElement(By.xpath('//span[contains(text(), "Confirm Password")]'))
      .click();
    const confirmPassElement = await driver.findElement(
      By.xpath('//input[@formcontrolname="confirmPass"]')
    );
    await confirmPassElement.sendKeys("Selenium@123");
  },

  clickSignUp: async (driver) => {
    await driver.sleep(1000);
    await driver
      .findElement(By.xpath('//span[@pe-i18n-key="actions.sign_up"]'))
      .click();
  },

  waitBusinessInformationForm: async (driver) => {
    await driver.wait(
      until.elementLocated(
        By.xpath(`//span[contains(text(), "Registered Business")]`)
      ),
      5000
    );
  },

  fillBusinessStatus: async (driver) => {
    await driver
      .findElement(By.xpath('//span[contains(text(), "Business Status")]'))
      .click();
    await driver
      .findElement(By.xpath('//span[contains(text(), "Solo Entrepreneur")]'))
      .click();
  },

  fillStatus: async (driver) => {
    await driver
      .findElement(By.xpath('//span[contains(text(), "Just looking around")]'))
      .click();
    await driver
      .findElement(
        By.xpath('//span[contains(text(), "Growing an existing business")]')
      )
      .click();
  },

  fillSales: async (driver) => {
    await driver
      .findElement(By.xpath('//span[contains(text(), "Sales")]'))
      .click();
    await driver
      .findElement(
        By.xpath('//span[contains(text(), "50.000 EUR to 250.000 EUR")]')
      )
      .click();
  },

  fillCountryCode: async (driver) => {
    await driver
      .findElement(By.xpath('//span[contains(text(), "Country Code")]'))
      .click();
    await driver
      .findElement(By.xpath('//span[contains(text(), "+62 Indonesia")]'))
      .click();
  },

  clickGetStarted: async (driver) => {
    await driver.sleep(1000);
    await driver
      .findElement(
        By.xpath('//div[contains(text(), "Get started with payever")]')
      )
      .click();
  },

  waitGetStarted: async (driver) => {
    await driver.wait(
      until.elementLocated(By.xpath(`//div[@class="welcome-screen-content"]`)),
      30000
    );
  },

  clickGetStartedOnWelcomeScreen: async (driver) => {
    await driver.sleep(1000);
    await driver
      .findElement(By.xpath('//div[contains(text(), "Get Started")]'))
      .click();
  },

  waitFashionDashboard: async (driver) => {
    await driver.wait(
      until.elementLocated(By.xpath(`//div[@class='icons__links']`)),
      30000
    );
  },

  wait: async (driver, duratio) => {
    await driver.sleep(duratio);
  },
};

export const registrationFashion = {
  fillNameOnInvoice: async (driver) => {
    await driver
      .findElement(By.xpath('//span[contains(text(), "Name on Invoice")]'))
      .click();
    const invoiceNameElement = await driver.findElement(
      By.xpath('//input[@formcontrolname="name"]')
    );
    await invoiceNameElement.sendKeys("Selenium Test");
  },

  fillIndustry: async (driver) => {
    await driver
      .findElement(
        By.xpath(`//div[@class='label-container ng-tns-c170-13 form-label']`)
      )
      .click();
    await driver
      .findElement(By.xpath('//span[contains(text(), "Fashion")]'))
      .click();
  },

  fillPhonenumber: async (driver) => {
    let randomNum = Math.floor(Math.random() * 1000);
    await driver
      .findElement(By.xpath('//span[contains(text(), "Phone Number")]'))
      .click();
    const phoneNumberElement = await driver.findElement(
      By.xpath('//input[@formcontrolname="phoneNumber"]')
    );
    await phoneNumberElement.sendKeys(`8521000${randomNum}`);
  },

  checkIconTransaction: async (driver) => {
    return await driver
      .findElement(
        By.css(
          `body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(4) > div.icons__image > svg`
        )
      )
      .isDisplayed();
  },

  checkIconCheckout: async (driver) => {
    return await driver
      .findElement(
        By.css(
          `body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(1) > div.icons__image > svg > use`
        )
      )
      .isDisplayed();
  },

  checkIconConnect: async (driver) => {
    return await driver
      .findElement(
        By.css(
          `body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(2) > div.icons__image > svg > use`
        )
      )
      .isDisplayed();
  },

  checkIconProduct: async (driver) => {
    return await driver
      .findElement(
        By.css(
          `body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(3) > div.icons__image > svg > use`
        )
      )
      .isDisplayed();
  },

  checkIconShop: async (driver) => {
    return await driver
      .findElement(
        By.css(
          `body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(6) > div.icons__image > svg > use`
        )
      )
      .isDisplayed();
  },

  checkIconSetting: async (driver) => {
    return await driver
      .findElement(
        By.css(
          `body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(17) > div.icons__image > svg`
        )
      )
      .isDisplayed();
  },
};

export const registrationSantander = {
  fillCompanyName: async (driver) => {
    await driver
      .findElement(By.xpath('//span[contains(text(), "Company name")]'))
      .click();
    const companyNameElement = await driver.findElement(
      By.xpath(`//input[contains(@class, 'ng-tns-c170-8')]`)
    );
    await companyNameElement.sendKeys("Selenium Test");
  },

  fillIndustry: async (driver) => {
    await driver
      .findElement(By.xpath('//span[contains(text(), "Industry")]'))
      .click();
    await driver
      .findElement(By.xpath('//span[contains(text(), "Electronics")]'))
      .click();
  },

  fillPhonenumber: async (driver) => {
    let randomNum = Math.floor(Math.random() * 1000);
    await driver
      .findElement(By.xpath('//span[contains(text(), "Phone Number")]'))
      .click();
    const phoneNumberElement = await driver.findElement(
      By.xpath(`//input[contains(@class, 'ng-pristine')]`)
    );
    await phoneNumberElement.sendKeys(`8520000${randomNum}`);
  },

  fillVatNumber: async (driver) => {
    let randomNum = Math.floor(Math.random() * 1000);
    await driver
      .findElement(By.xpath('//span[contains(text(), "VAT number")]'))
      .click();
    const vatNumberElement = await driver.findElement(
      By.xpath(`//input[contains(@class, 'ng-tns-c170-14')]`)
    );
    await vatNumberElement.sendKeys(`5550000${randomNum}`);
  },

  checkIconTransaction: async (driver) => {
    return await driver
      .findElement(
        By.css(
          `body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(4) > div.icons__image > svg > use`
        )
      )
      .isDisplayed();
  },

  checkIconCheckout: async (driver) => {
    return await driver
      .findElement(
        By.css(
          `body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(1) > div.icons__image > svg`
        )
      )
      .isDisplayed();
  },

  checkIconConnect: async (driver) => {
    return await driver
      .findElement(
        By.css(
          `body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(2) > div.icons__image > svg > use`
        )
      )
      .isDisplayed();
  },

  checkIconPointOfSale: async (driver) => {
    return await driver
      .findElement(
        By.css(
          `body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(3) > div.icons__image > svg > use`
        )
      )
      .isDisplayed();
  },

  checkIconSetting: async (driver) => {
    return await driver
      .findElement(
        By.css(
          `body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(5) > div.icons__image > svg`
        )
      )
      .isDisplayed();
  },
};

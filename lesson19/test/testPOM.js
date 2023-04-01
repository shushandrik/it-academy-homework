const mainPage = require('../pageobjects/mainPage');
const navBarRight = require('../pageobjects/components/navBarRight');

describe('My homework for webdriver.io testing with POM', () => {
  beforeEach(async () => {
    await mainPage.navigate('https://webdriver.io/');
  });

  it('should be selected 8 version', async () => {
    await expect(navBarRight.version).toHaveTextContaining('v8');
  });

  it('should search SetTimeout', async () => {
    await navBarRight.checkSearch('SetTimeout');
    await expect(navBarRight.checkH1).toHaveTextContaining('setTimeout');
  });

  it('should go to github.com', async () => {
    await navBarRight.goToItemNavbar();
    await expect(browser).toHaveUrl('https://github.com/webdriverio/webdriverio');
  });
});

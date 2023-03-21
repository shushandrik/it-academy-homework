describe('My homework for webdriver.io testing', () => {
  beforeEach(async () => {
    await browser.url('https://webdriver.io');
  });

  it('should be selected 8 version', async () => {
    const version = await $('//div[@class=\'navbar__items navbar__items--right\']//a[@class=\'navbar__item navbar__link\']');
    await expect(version).toHaveTextContaining('v8');
  });

  it('should search SetTimeout', async () => {
    await $('.DocSearch-Button-Placeholder').click();
    await $('input.DocSearch-Input').setValue('SetTimeout');
    await $('section.DocSearch-Hits:first-child ul>li:first-child').click();
    await expect($('header>h1')).toHaveTextContaining('setTimeout');
  });

  it('should go to github.com', async () => {
    const githubButton = await $('//div[@class=\'navbar__items navbar__items--right\']//a[@class=\'navbar__item navbar__link header-github-link\']').click();
    await browser.switchWindow('github.com');
    await expect(browser).toHaveUrl('https://github.com/webdriverio/webdriverio');
  });

  /* it ('should be enabled night mode', async () => {
        await $(`.lightToggleIcon_pyhR`).click();
        const darkMode = await $(`//button[@class='clean-btn toggleButton_gllP']`);
        expect (await (darkMode).getText()).toHaveTextContaining('ufsfgsgsbdgt');
    }) */ // ?????Почему тест при любых значениях проходит без ошибки??????
});

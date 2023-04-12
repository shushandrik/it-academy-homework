const { test, expect } = require('@playwright/test');
const BasePage = require('../page-objects/basePage');
const Autorization = require('../page-objects/page-components/authorization');


test.describe('Authorization page', async () => {

  test('Should logged with correct credentials', async ({ page }) => {
    const basePage = new BasePage(page);
    const authorization = new Autorization(page);
    await basePage.navigate('https://www.lamoda.by/men-home/');
    await authorization.loginWithCredentials('400500@tut.by', 'QweQ62148333');
    await expect(await authorization.profile).toContainText('Профиль'); // проверяет, что с верными кредами происходит вход в ЛК.
  });

  test('Should don`t logged with wrong credentials', async ({ page }) => {
    const basePage = new BasePage(page);
    const authorization = new Autorization(page);
    await basePage.navigate('https://www.lamoda.by/men-home/');
    await authorization.loginWithCredentials('400500@tut.by', 'QweQ62148333глргш');
    await expect(authorization.notificationWrongCredentials).toContainText('Неверный'); // проверяет, что при не верных кредах появляется сообщение с ошибкой
  });

  test('Should ', async ({ page }) => {
    const basePage = new BasePage(page);
    const authorization = new Autorization(page);
    await basePage.navigate('https://www.lamoda.by/men-home/');
    await authorization.passwordRecovery('wnfn@jpj.ru');
    await expect(authorization.restoreButton).toBeEnabled(); // проверяет, что кнопка "Восстановить" становится активной и письмо может быть отправлено
  });

  test.skip('Quick login', async ({ page }) => {
    const basePage = new BasePage(page);
    const authorization = new Autorization(page);
    await basePage.navigate('https://www.lamoda.by/men-home/'); // нужно переключиться на новое окно
    await authorization.quickVkLogin();

    // await expect(page).toHaveURL(/.*vk/);
    // await page.pause(2000)
  });

  test.skip('should reg new user', async ({ page }) => {
    const basePage = new BasePage(page);
    const authorization = new Autorization(page);
    await basePage.navigate('https://www.lamoda.by/men-home/');
    await authorization.registrationNewUser();
    await page.pause(2000);
  });
 

// await header.deliveryRegion.click();
// await expect(page).toHaveTitle('Мужская обувь — купить в интернет-магазине Ламода');
/*
describe.test ('Cart', async () => {
   test ('add to cart', async({page}) =>{
    const basePage = new BasePage(page);
    await basePage.navigate('https://www.lamoda.by/men-home/');
    const header = new Header(page);
    const cart = new Cart(page);
    //await page.locator("//div[@class='_root_12pcw_2']/a[1]").click();
    await cart.addProductToCart();
});



  })*/
})
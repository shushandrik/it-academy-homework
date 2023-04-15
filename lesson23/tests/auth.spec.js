const { test, expect } = require('@playwright/test');
const BasePage = require('../page-objects/basePage');
const Autorization = require('../page-objects/page-components/authorization');

test.describe('Tests authorization page and functions', async () => {
  test('Should logged with correct credentials', async ({ page }) => {
    const basePage = new BasePage(page);
    const authorization = new Autorization(page);
    await basePage.navigate('https://www.lamoda.by/men-home/');
    await authorization.doLoginWithCredentials('400500@tut.by', 'QweQ62148333');
    await expect(await authorization.profile).toContainText('Профиль'); // проверяет, что с верными кредами происходит вход в ЛК.
  });

  test('Should don`t logged with wrong credentials', async ({ page }) => {
    const basePage = new BasePage(page);
    const authorization = new Autorization(page);
    await basePage.navigate('https://www.lamoda.by/men-home/');
    await authorization.doLoginWithCredentials('400500@tut.by', 'QweQ62148333глргш');
    await expect(authorization.notificationWrongCredentials).toContainText('Неверный'); // проверяет, что при неверных кредах появляется сообщение с ошибкой
  });

  test('Button should be active  ', async ({ page }) => {
    const basePage = new BasePage(page);
    const authorization = new Autorization(page);
    await basePage.navigate('https://www.lamoda.by/men-home/');
    await authorization.doPasswordRecovery('wnfn@jpj.ru');
    await expect(authorization.restoreButton).toBeEnabled(); // проверяет, что кнопка "Восстановить" становится активной и письмо может быть отправлено
  });

  test('should reg new user', async ({ page }) => {
    const basePage = new BasePage(page);
    const authorization = new Autorization(page);
    await basePage.navigate('https://www.lamoda.by/men-home/');
    await authorization.doRegistrationNewUser();
    expect(authorization.regisrationButton).toBeEnabled(); // проверяет, что кнопка "Зарегистрировать" становится активной и пользователь может быть зарегистрирован
  });
});

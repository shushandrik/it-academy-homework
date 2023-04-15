class Autorization {
  constructor(page) {
    this.page = page;
    this.login = page.locator("//div[@class='_root_12pcw_2']/a[1]");
    this.authFrame = page.locator('.d-modal__frame');
    this.register = page.locator("//div[@class='_register_3a8g7_8']/a");
    this.numberOrEmailInput = page.locator("//div[@class='input-material__input-wrapper']/input");
    this.passwordField = page.locator("//div[@class='input-material__input-wrapper']/input[@type='password']");
    this.forgotPassword = page.locator("//div[@class='_forgotPwd_3a8g7_18']/a");
    this.entrance = page.locator("//div[@class='_footer_3a8g7_36']/button");
    this.vkAuth = page.locator("//div[@class='_row_1jtb3_6']/span[1]");
    this.googleAuth = page.locator("//div[@class='_row_1jtb3_6']/span[2]");
    this.mailruAuth = page.locator("//div[@class='_row_1jtb3_6']/span[3]");
    this.profile = page.locator('._brokenUnhoverFix_gkbwv_8');
    this.notificationWrongCredentials = page.locator('._notification_11do5_2');
    this.entryYourEmail = page.locator("div[class='d-modal__content d-modal__content_paddings d-modal__content_web8923'] input");
    this.restoreButton = page.locator('._footer_ht48r_34 button');
    this.vkButton = page.locator("span[class= '_item_1jtb3_12 _item_vk_1jtb3_22']");
    this.googleButton = page.locator("span[class='_item_1jtb3_12 _item_gp_1jtb3_26']");
    this.mailruButton = page.locator("span[class= '_item_1jtb3_12 _item_ml_1jtb3_34']");
    this.enterYourName = page.locator("//div[@class='_content_1ekkp_13']//input[@type='text']");
    this.enterYourEmail = page.locator("//div[@class='_content_1ekkp_13']//input[@type='email']");
    this.enterYourPhoneNumber = page.locator = ("//div[@class='_content_1ekkp_13']//input[@type='tel']");
    this.enterPassword = page.locator = ("//div[@class='_content_1ekkp_13']//input[@name='password']");
    this.enterConfirmationPassword = page.locator = ("//div[@class='_content_1ekkp_13']//input[@name='password_confirmation']");
    this.subscribeNews = page.locator = ("//div[@class='x-checkbox x-checkbox_alignment_center _checkboxMargin_1cc0m_7 _checkbox_1cc0m_7']//span");
    this.agreementPersonslData = page.locator = ("//div[@class='x-checkbox x-checkbox_alignment_center _root_g83ar_2 _inputMargin_1cc0m_44 _policyAgreement_1cc0m_16']//span");
    this.regisrationButton = page.locator = ('._footer_1cc0m_56 button');
  }

  async doLoginWithCredentials(email, password) {
    await this.login.click();
    await this.numberOrEmailInput.click();
    await this.numberOrEmailInput.fill(email);
    await this.page.keyboard.press('Tab');
    await this.passwordField.click();
    await this.passwordField.fill(password);
    await this.entrance.click();
  }

  async doPasswordRecovery(email) {
    await this.login.click();
    await this.forgotPassword.click();
    await this.entryYourEmail.click();
    await this.entryYourEmail.fill(email);
  }


  async doRegistrationNewUser() {
    await this.login.click();
    await this.register.click();
    await this.enterYourName.fill('Андрей');
    await this.page.keyboard.press('Tab');
    await this.enterYourEmail.fill('400500@tut.by');
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.type('296214833');
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.type('QweQ123456');
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.type('QweQ123456');
    await this.page.check(this.agreementPersonslData);
  }
}
module.exports = Autorization;

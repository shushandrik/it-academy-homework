const {Builder, By, Key, until } = require("selenium-webdriver");
const {expect} = require('chai');

describe ('Site ChromeDrives test', function () {
    let driver;
    before (async ()=> {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();  
    });

     after (async () => {
        await driver.quit();
     }); 


it ('1. Title contains ChromeDriver', async () => {
    
    await driver.get('https://chromedriver.chromium.org/home');
    const compareTitle = await driver.getTitle();
    expect (await compareTitle).to.contain('ChromeDriver')
})

it ('2. Highlighting Chrome Extensions', async () => {
    await driver.get ('https://chromedriver.chromium.org/home');
    const buttonChromeExtension = await driver.findElement(By.xpath(`//*[@class ='VsJjtf'][3]`));
    await buttonChromeExtension.click();
    //const el = await driver.findElement(By.xpath(//*[@class='K1Ci7d oXBWEc jYxBte']));  не срабатывает
    //driver.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", el)
    const compareTitle = await driver.getTitle();
    expect (await compareTitle).to.contain('Chrome Extensions');
    await driver.sleep(3000);
}) 

it ('3. The search field should contain "driver"', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    const searchButton = await driver.findElement(By.xpath(`//*[@class= 'vu8Pwe tCHXDc YSH9J']`));
    await searchButton.click();
    await driver.findElement(By.xpath(`//*[@class= 'whsOnd zHQkBf']`)).sendKeys('driver', Key.ENTER);
    await driver.sleep(3000);
    const searchField = await driver.findElement(By.xpath(`//*[@class ='gtazFe'][1]`))
    expect (await searchField.getText()).to.contain('driver');    //.toLowerCase() с ним не работает
    driver.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", searchField)  // убрать, пример для предыдущего теста
    await driver.sleep(3000);  
})

it ('URL should be contains "/mobile-emulation"', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    const additionallyButton = await driver.findElement(By.xpath(`//a[text()='Дополнительно']`));
    additionallyButton.click();
    const emulationButton = await driver.findElement(By.xpath(`//div[@class='PsKE7e IKA38e oNsfjf']//a[text()='Mobile Emulation']`));
    emulationButton.click();
    await driver.sleep(1000); 
    //await driver.wait(until.elementIsVisible(emulation));
    const compareUrl = await driver.getCurrentUrl();    
    expect (await compareUrl).to.contain('/mobile-emulation');
    
})

})



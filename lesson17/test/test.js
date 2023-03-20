const {Builder, By, Key, until } = require("selenium-webdriver");
const {expect} = require('chai');

describe ('Site ChromeDrivers test', function () {
    let driver;
    before (async ()=> {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize(); 
        await driver.manage().setTimeouts( { implicit: 10000 } ); 
    });

     after (async () => {
        await driver.quit();
     }); 


it ('1. Title should contains ChromeDriver', async () => {
    
    await driver.get('https://chromedriver.chromium.org/home');
    const compareTitle = await driver.getTitle();
    expect (await compareTitle).to.contain('ChromeDriver')
})

it ('2. Title should contains "Chrome Extensions" and highlighting ', async () => {
    await driver.get ('https://chromedriver.chromium.org/home');
    await driver.findElement(By.xpath(`//*[@class ='VsJjtf'][3]`)).click();
    const h1HighLight = await driver.findElement(By.xpath(`//h1['Rn3Z1b']`));
    driver.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", h1HighLight); // к сожалению, не смог подсветить title, сделал подсветку для h1
    const compareTitle = await driver.getTitle();
    expect (await compareTitle).to.contain('Chrome Extensions');
    
}) 

it ('3. The search field should contains "driver"', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    await driver.findElement(By.xpath(`//*[@class= 'vu8Pwe tCHXDc YSH9J']`)).click();
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath(`//*[@class= 'whsOnd zHQkBf']`))),2000).sendKeys('driver', Key.ENTER);
    const searchField = await driver.findElement(By.xpath(`//*[@class ='gtazFe'][1]`))
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath(`//*[@class ='gtazFe'][1]`))),2000);
    expect (await searchField.getText()).to.contain('driver');    //.toLowerCase() ---- с ним не работает
    
})

it ('URL should contains "/mobile-emulation"', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    await driver.findElement(By.xpath(`//a[text()='Дополнительно']`)).click();
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath(`//div[@class='PsKE7e IKA38e oNsfjf']//a[text()='Mobile Emulation']`)))).click();
    const compareUrl = await driver.getCurrentUrl();    
    expect (await compareUrl).to.contain('/mobile-emulation');
    
})

})
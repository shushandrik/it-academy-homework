//const { Builder} = require ('selenium-webdriver');
//const {expect} = require ('chai');

const {Builder, By, Key, until } = require("selenium-webdriver");
const {expect} = require('chai');

describe ('Site ChromeDrives test', function () {
    let driver;
    before (async ()=> {
        driver = await new Builder().forBrowser('chrome').build();  
    });

     after (async () => {
        await driver.quit();
     }); 


it ('Title contains ChromeDriver', async () => {
    
    await driver.get('https://chromedriver.chromium.org/home');
    const compareTitle = await driver.getTitle();
    //await driver.sleep(3000);
    expect (await compareTitle).to.contain('ChromeDriver')
   
    })
}) 




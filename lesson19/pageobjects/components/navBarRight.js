const BasePage = require ('../basePage');

class NavBarRight extends BasePage{

    get version () {
        return $('//div[@class=\'navbar__items navbar__items--right\']//a[@class=\'navbar__item navbar__link\']');
    }

    get githubButton () {
        return $('//div[@class=\'navbar__items navbar__items--right\']//a[@class=\'navbar__item navbar__link header-github-link\']');
    }

    get twitterButton () {
        return $('//div[@class=\'navbar__items navbar__items--right\']//a[@class=\'navbar__item navbar__link header-twitter-link\']')
    }

    get lightMode (){
        return $('.lightToggleIcon_pyhR');
    }

    get searchButton (){
        return $('.DocSearch-Button-Placeholder');
    }

    get searchField (){
        return $('input.DocSearch-Input');
    }
    get firstResult () {
        return $('section.DocSearch-Hits:first-child ul>li:first-child');        
    }

    get firstResult (){
        return $('section.DocSearch-Hits:first-child ul>li:first-child');
    }

    get checkH1 (){
        return $('header>h1');
    }
    

    async checkSearch (searchValue) {
        await this.searchButton.click();
        await this.searchField.setValue(searchValue);
        await this.firstResult.click();
    }

    async goToItemNavbar () {
        await this.githubButton.click();
        await browser.switchWindow('github.com');     

    }
}

module.exports = new NavBarRight();
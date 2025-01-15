import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    public get heading () {
        return $('#gh-la');
    }

    public get searchInput () {
        return $('#gh-ac');
    }

    public get searchBtn () {
        return $('#gh-search-btn');
    }

    public  get firstBofirstItemfromList () {
       return $('ul.srp-results.srp-list.clearfix > li:first-child div.s-item__info.clearfix a.s-item__link');
    }

    public  get link () {
        return $('ul.srp-results.srp-list.clearfix li a');
    }

    public get addToCartBtn () {
        return $('#atcBtn_btn_1');
    }

    public get goToCheckoutbtn () {
        return $('//button[contains(text(),"Go to checkout")]');
    }

    public get cartItemCount () {
        return $('span.badge');
    }



    public async searchItem (input: string) {
        await this.heading.isDisplayed();
        await this.searchInput.click();
        await this.searchInput.setValue(input);
        await this.searchBtn.click();
    }

    public async clickOnFirstBook(){
        await this.firstBofirstItemfromList.isClickable();
        await this.firstBofirstItemfromList.scrollIntoView();
        await this.firstBofirstItemfromList.click();
    }

    public async addItemToCart(){
        await browser.pause(3000);
        await browser.switchWindow('https://www.ebay.com/itm/');
        await this.addToCartBtn.isClickable();
        await this.addToCartBtn.scrollIntoView();
        await this.addToCartBtn.click();
        await this.goToCheckoutbtn.isDisplayed();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new HomePage();

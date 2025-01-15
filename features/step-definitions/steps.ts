import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import HomePage from '../pageobjects/home.page';

Given(/^I am on the home page$/, async () => {
    await HomePage.open();
});

When(/^I search for (\w+)$/, async (input) => {
    await HomePage.searchItem(input);
});

When(/^I click on the first book in the list$/, async () => {
    await HomePage.clickOnFirstBook();
});

When(/^I click on Add to cart$/, async () => {
    await HomePage.addItemToCart()
});

Then(/^verify the cart has been updated and displays the number of items in the cart (.*)$/, async (count) => {
    await expect(HomePage.cartItemCount).toHaveText(expect.stringContaining(count));
});


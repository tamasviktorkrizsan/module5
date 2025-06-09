import { expect } from '@wdio/globals'

import IndexPage from '../pageobjects/index.page.js'
import { browser} from '@wdio/globals'


let indexPage = new IndexPage('https://practicesoftwaretesting.com');


describe('index page', () => {


  it('(UC-6) User changes language', async () => {
        
        
    await indexPage.open();

    
    await indexPage.languageSelector.click();

    await indexPage.languageSelector.waitForDisplayed();

    await indexPage.DeButton.click();

    await indexPage.checkSortTitleLanguage('Sortieren');
    

    })


it('(UC-7) User using search with results', async () => {
                
    await indexPage.open();

    await indexPage.searchBox.click();

    await indexPage.setSearchBox('Wood Saw');

    await indexPage.searchBox.click();

    await indexPage.checkSearchResults('Wood Saw');

    })


it('(UC-8) User using search with no results', async () => {
        
    await indexPage.open();


    await indexPage.searchBox.click();

    await indexPage.setSearchBox('xyz');

    await indexPage.searchBox.click();

    await indexPage.checkSearchResults('There are no products found');

})





})
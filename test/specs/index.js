import { should } from 'chai'
import IndexPage from '../pageobjects/index.page.js'



should();


let indexPage = new IndexPage('https://practicesoftwaretesting.com');


describe('index page', () => {


  it('(UC-6) User changes language', async () => {
        
        
    await indexPage.open();

    
    await indexPage.languageSelector.click();

    await indexPage.languageSelector.waitForDisplayed();

    await indexPage.DeButton.click();

    const sortTitle = await indexPage.sortTitle.getValue();

    sortTitle.should.equal('Sortieren');
    

    })



it('(UC-7) User using search with results', async () => {
                
    await indexPage.open();

    await indexPage.searchBox.click();

    await indexPage.setSearchBox('Wood Saw');

    await indexPage.searchBox.click();

    await indexPage.searchResults.waitForDisplayed();

    const searchResults = await indexPage.searchResults.getValue();

    await searchResults.should.equal('Wood Saw');

    })





it('(UC-8) User using search with no results', async () => {
        
    await indexPage.open();


    await indexPage.searchBox.click();

    await indexPage.setSearchBox('xyz');

    await indexPage.searchBox.click();

    await indexPage.searchResults.waitForDisplayed();

    const searchResults = await indexPage.searchResults.getValue();

    await searchResults.should.equal('There are no products found');

})




})
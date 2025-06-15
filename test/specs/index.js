import IndexPage from '../pageobjects/index.page.js'

import testData from '../testdata/indexTestData.json' assert { type: 'json' };

import * as chai from 'chai';

const should = chai.should();

let indexPage = new IndexPage('https://practicesoftwaretesting.com');



describe('index page', () => {


  beforeEach(async () => {

   await browser.reloadSession();

   await indexPage.open();

  })


  it('(UC-6) User changes language', async () => {
                
    await indexPage.languageSelector.waitForDisplayed();

    await indexPage.languageSelector.click();

    await indexPage.DeButton.click();

    await browser.waitUntil(async function () {
      return (await indexPage.sortTitle.getText()) === 'Sortieren'
      }, 
      
      {
        timeout: 5000
      }

    );

    const sortTitle = await indexPage.sortTitle.getText();

    sortTitle.should.equal('Sortieren');
    
  })
 

  it('(UC-7) User using search with results', async () => {
                
    const searchedItem = testData.search.valid;
    
    await indexPage.searchBox.click();

    await indexPage.setSearchBox(searchedItem);

    await indexPage.searchButton.click();

    await indexPage.searchCaption.waitForDisplayed();

    const card = await indexPage.cardTitle.getText();

    await card.should.include(searchedItem);

  })


  it('(UC-8) User using search with no results', async () => {
        
    await indexPage.searchBox.click();

    await indexPage.setSearchBox(testData.search.invalid);

    await indexPage.searchButton.click();

    const searchResults = await indexPage.noResultsText.getText();

    await searchResults.should.equal('There are no products found.');

  })


})
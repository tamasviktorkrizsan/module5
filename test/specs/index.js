// import * as chai from 'chai'
import IndexPage from '../pageobjects/index.page.js'

// const { expect, should } = chai;

import * as chai from 'chai';

const should = chai.should();

// const should = chai.should();


let indexPage = new IndexPage('https://practicesoftwaretesting.com');



describe('index page', () => {


beforeEach(async () => {


// németen maradna a szöveg a local session miatt

await browser.reloadSession();

 await indexPage.open();


})



/* 
  it('(UC-6) User changes language', async () => {
        
        
    await indexPage.languageSelector.waitForDisplayed();

    await indexPage.languageSelector.click();

    await indexPage.DeButton.click();

    // explicit waitet ide rakni

    await browser.waitUntil(async function () {
        return (await indexPage.sortTitle.getText()) === 'Sortieren'
      }, 
      
      {
        timeout: 5000,
        timeoutMsg: 'expected text to be different after 5s'
      }

    );

    
    const sortTitle = await indexPage.sortTitle.getText();

    sortTitle.should.equal('Sortieren');
    

    })
 */




it('(UC-7) User using search with results', async () => {
                
    const searchedItem = 'Wood Saw';
    

    await indexPage.searchBox.click();

    await indexPage.setSearchBox(searchedItem);

    await indexPage.searchButton.click();

    // await indexPage.searchResults.waitForDisplayed();

    const searchResults = await indexPage.searchResults;

    let i = 0;

    while(i<searchResults.length && searchResults[i] != searchedItem){

     i++;

    }

    if (i<searchResults.length){

      
    }





    console.log(searchResults);

    // await searchResults.should.equal('Wood Saw');

    })

 


 
/* 

it('(UC-8) User using search with no results', async () => {
        
   


    await indexPage.searchBox.click();

    await indexPage.setSearchBox('xyz');

    await indexPage.searchButton.click();

    // await indexPage.noResultsText.waitForDisplayed();

    const searchResults = await indexPage.noResultsText.getText();

    // should.exist(searchResults);

    await searchResults.should.equal('There are no products found.');

})

 */

})
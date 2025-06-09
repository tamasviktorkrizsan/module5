import { expect, assert } from 'chai'

import LoginPage from '../pageobjects/login.page.js'
import IndexPage from '../pageobjects/index.page.js'
import { browser} from '@wdio/globals'


let loginPage = new LoginPage('https://practicesoftwaretesting.com/auth/login');

let indexPage = new IndexPage('https://practicesoftwaretesting.com');


describe('Login page', () => {


  it('(UC-1) Test Login form with empty email', async () => {
        
        
    await loginPage.open();

    await loginPage.setPassword(process.env.PASSWORD);
   
    await loginPage.loginButton.click();

    await loginPage.errorMessage.waitForDisplayed();

    const errorText = await loginPage.errorMessage.getText();

    assert.equal(errorText, 'Email is required');


    })


it('(UC-2) Test Login form with empty password', async () => {
        
        
    await loginPage.open();

    await loginPage.setEmail(process.env.EMAIL);

    await loginPage.setPassword('');
   
    await loginPage.loginButton.click();

   await loginPage.errorMessage.waitForDisplayed();

    const errorText = await loginPage.errorMessage.getText();

    assert.equal(errorText, 'Password is required');

    })




it('(UC-3) Test Login form with invalid Username & Password', async () => {
        
    await loginPage.open();

    await loginPage.setEmail('wrong@email.com');
   
    await loginPage.setPassword('WrongPassword+');

    await loginPage.loginButton.click();

    await loginPage.errorMessage.waitForDisplayed();

    const errorText = await loginPage.errorMessage.getText();

    assert.equal(errorText, 'Invalid email or password');

})    



it('(UC-4) Test Login form with valid Username & Password', async () => {
        
    await loginPage.open();

    await loginPage.setEmail(process.env.EMAIL);
   
    await loginPage.setPassword(process.env.PASSWORD);

    await loginPage.loginButton.click();

    await indexPage.dropdownMenu.waitForDisplayed();

    const currentUrl = await browser.getUrl();
    expect(currentUrl).to.equal('https://practicesoftwaretesting.com/account');

})    



it('(UC-5) User logs out successfully', async () => {
        
        
    await loginPage.open();

    await loginPage.setEmail(process.env.EMAIL);
   
    await loginPage.setPassword(process.env.PASSWORD);

    await loginPage.loginButton.click();

    await indexPage.dropdownMenu.click();

    await indexPage.dropdownMenu.waitForDisplayed();

    await indexPage.logoutButton.click();

    await loginPage.loginButton.waitForDisplayed();

     const currentUrl = await browser.getUrl();

     expect(currentUrl).to.equal('https://practicesoftwaretesting.com/auth/login');

    })

















})


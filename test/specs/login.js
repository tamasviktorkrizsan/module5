import { expect, assert } from 'chai';

import LoginPage from '../pageobjects/login.page.js';
import IndexPage from '../pageobjects/index.page.js';
import {browser} from '@wdio/globals';

import testData from '../testdata/loginTestData.json' assert { type: 'json' };







let loginPage = new LoginPage('https://practicesoftwaretesting.com/auth/login');

let indexPage = new IndexPage('https://practicesoftwaretesting.com');


describe('Login page', () => {

/* /* 
  it('(UC-1) Test Login form with empty email', async () => {
        
        
    await loginPage.open();

    await loginPage.setPassword(process.env.PASSWORD);
   
    await loginPage.loginButton.click();

    await loginPage.emailError.waitForDisplayed();

    const errorText = await loginPage.emailError.getText();

    assert.equal(errorText, 'Email is required');


    })



    

it('(UC-2) Test Login form with empty password', async () => {
        
        
    await loginPage.open();

    await loginPage.setEmail(process.env.EMAIL);

    await loginPage.setPassword('');
   
    await loginPage.loginButton.click();

   await loginPage.passwordError.waitForDisplayed();

    const errorText = await loginPage.passwordError.getText();

    assert.equal(errorText, 'Password is required');

    })




it('(UC-3) Test Login form with invalid Username & Password', async () => {
        
    await loginPage.open();

    await loginPage.setEmail(testData.invalidCredentials.email);
   
    await loginPage.setPassword(testData.invalidCredentials.password);

    await loginPage.loginButton.click();

    await loginPage.loginError.waitForDisplayed();

    const errorText = await loginPage.loginError.getText();

    assert.equal(errorText, 'Invalid email or password');

})    



it('(UC-4) Test Login form with valid Username & Password', async () => {
        
    await loginPage.open();

    await loginPage.setEmail(process.env.EMAIL);
   
    await loginPage.setPassword(process.env.PASSWORD);

    await loginPage.loginButton.click();

    await indexPage.dropdownMenu.waitForDisplayed();

    const currentUrl = await browser.getUrl();
    
    expect(currentUrl).to.equal(process.env.URL + process.env.ACCOUNT_PATH);

})    

 */

/* 
 it('(UC-5) User logs out successfully', async () => {
               
    await loginPage.open();

    await loginPage.setEmail(process.env.EMAIL);
   
    await loginPage.setPassword(process.env.PASSWORD);

    await loginPage.loginButton.click();

    // !!! explicit wait ide (aacount page-n valamilyen lokátort nézni) waitfordisplay / browser.waitUntil

    await indexPage.dropdownMenu.click();

    await indexPage.logoutButton.click();



await browser.waitUntil(async function () {
        return (await loginPage.registerTitle.getText()) === 'Register your account'
      }, 
      
      {
        timeout: 5000,
        timeoutMsg: 'expected text to be different after 5s'
      }

    );


     const currentUrl = await browser.getUrl();

     expect(currentUrl).to.equal(process.env.URL + process.env.LOGIN_PATH);

    })

 */














})


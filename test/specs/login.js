import { expect } from '@wdio/globals'

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

    await expect(loginPage.errorMessage.getValue('Email is required'));

    })


it('(UC-2) Test Login form with empty password', async () => {
        
        
    await loginPage.open();

    await loginPage.setEmail(process.env.EMAIL);
   
    await loginPage.loginButton.click();

    await expect(loginPage.errorMessage.getValue('Password is required'));

    })




it('(UC-3) Test Login form with invalid Username & Password', async () => {
        
    await loginPage.open();

    await loginPage.setEmail('wrong@email.com');
   
    await loginPage.setPassword('WrongPassword+');

    await loginPage.loginButton.click();

    await expect(loginPage.errorMessage.getValue('Invalid email or password'));

    
})    



it('(UC-4) Test Login form with valid Username & Password', async () => {
        
    await loginPage.open();

    await loginPage.setEmail(process.env.EMAIL);
   
    await loginPage.setPassword(process.env.PASSWORD);

    await loginPage.loginButton.click();

    await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/account');

})    



it('(UC-5) User logs out successfully', async () => {
        
        
    await loginPage.open();

    await loginPage.setEmail(process.env.EMAIL);
   
    await loginPage.setPassword(process.env.PASSWORD);

    await loginPage.loginButton.click();

    await indexPage.dropdownMenu.click();

    await indexPage.dropdownMenu.waitForDisplayed();

    await indexPage.logoutButton.click();

    await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/auth/login');


    })



















})


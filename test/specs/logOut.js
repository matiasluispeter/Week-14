import homePage from '../pageobjects/homePage.js';
import LoginPage from '../pageobjects/loginPage.js';


describe('Buy a product', () => {
    beforeAll('browser', () => {
        browser.url('https://www.saucedemo.com')
    })
    it('log in correct user', async () => {
        await expect(LoginPage.btnSubmit).toBeDisplayed();
        await expect(LoginPage.inputUserName).toBeDisplayed();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('Click on Burguer button', async () => {
        await expect(homePage.btnBurguer).toBeDisplayed();
        await homePage.btnBurguerClick();
    });

    it('Click on log out button', async () => {
        await expect(homePage.btnLogOut).toBeDisplayed();
        await homePage.btnLogOutClick();
    });


});
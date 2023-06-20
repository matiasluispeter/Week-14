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

    it('home page user', async () => {
        await expect(homePage.productsText).toBeDisplayed();
        await expect(homePage.btnBurguer).toBeDisplayed();
        await expect(homePage.btnAddtoCartBackPack).toBeDisplayed();
    });

    it('Click on button, add to cart Back Pack', async () => {
        await expect(homePage.btnAddtoCartBackPack).toBeDisplayed();
        await homePage.btnAddtoCartBackPackClick();
    });

    it('Click on button, add to cart', async () => {
        await expect(homePage.btnShopping).toBeDisplayed();
        await homePage.btnShoppingClick();
    });

    it('your cart screen', async () => {
        await expect(homePage.yourCart).toBeDisplayed();
    });

    it('Click on checkout button', async () => {
        await expect(homePage.btnCheckOut).toBeDisplayed();
        await homePage.btnCheckOutClick();
    });

    it('User data', async () => {
        await homePage.fillForm('matias', 'toto', '651191')
    });

    it('Click on continue button', async () => {
        await expect(homePage.btnContinue).toBeDisplayed();
        await homePage.btnContinueClick();
    });

    it('overview screen', async () => {
        await expect(homePage.overview).toBeDisplayed();
    });

    it('Click on finish button', async () => {
        await expect(homePage.btnFinish).toBeDisplayed();
        await homePage.btnFinishClick();
    });

    it('success', async () => {
        await expect(homePage.success).toBeDisplayed();
    });

    it('Click on back to products button', async () => {
        await expect(homePage.backToProducts).toBeDisplayed();
        await homePage.backToProductsClick();
    });

});



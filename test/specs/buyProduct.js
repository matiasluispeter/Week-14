import form from '../pageobjects/form.js';
import LoginPage from '../pageobjects/login.page.js';


describe('Buy product', () => {
    beforeAll('browser', () => {
        browser.url('https://www.saucedemo.com')
    })
    it('log in correct user', async () => {
        await expect(LoginPage.inputUserName).toBeDisplayed();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('Click on button, add to cart', async () => {
        await expect(form.btnAddtoCart1).toBeDisplayed();
        await form.btnAddtoCart1.click();
    });


});

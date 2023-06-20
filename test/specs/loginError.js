import LoginPage from '../pageobjects/loginPage.js';

describe('My Login application', () => {
    beforeAll('browser', () => {
        browser.url('https://www.saucedemo.com')
    })
    it('Incorrect user', async () => {
        await expect(LoginPage.inputUserName).toBeDisplayed();
        await LoginPage.login('matias', 'secret_sauce');
    });

    it('Alert', async () => {
        await expect(LoginPage.errorAlert).toBeDisplayed();
    });
});

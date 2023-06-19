import LoginPage from '../pageobjects/login.page.js';

describe('My Login application', () => {
    beforeAll('browser', () => {
        browser.url('https://www.saucedemo.com')
    })
    it('Incorrect user', async () => {
        await expect(LoginPage.inputUserName).toBeDisplayed();
        await LoginPage.login('matias', 'secret_sauce');
    });
});

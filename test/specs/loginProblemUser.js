import homePage from '../pageobjects/homePage.js';
import LoginPage from '../pageobjects/loginPage.js';

describe('My Login application', () => {
    beforeAll('browser', () => {
        browser.url('https://www.saucedemo.com')
    })
    it('problem user log in', async () => {
        await LoginPage.login('problem_user', 'secret_sauce');
    });
    it('a dog image should appear', async () => {
        await expect(homePage.dogImg).toBeDisplayed();
    });

});

import LoginPage from '../pageobjects/login.page.js';


describe('My Login application', () => {
    beforeAll('browser', () => {
        browser.url('https://www.saucedemo.com')
    })
    it('Correct user', async () => {
        await expect(LoginPage.inputUserName).toBeDisplayed();
        await LoginPage.login('standard_user', 'secret_sauce');
    });
});

describe('My Login application', () => {
    beforeAll('browser', () => {
        browser.url('https://www.saucedemo.com')
    })
    it('Locked user log in', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
    });
});

describe('My Login application', () => {
    beforeAll('browser', () => {
        browser.url('https://www.saucedemo.com')
    })
    it('problem user log in', async () => {
        await LoginPage.login('problem_user', 'secret_sauce');
    });
});

describe('My Login application', () => {
    beforeAll('browser', () => {
        browser.url('https://www.saucedemo.com')
    })
    it('error user', async () => {
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
    });
});




class LoginPage {

    get inputUserName() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('#login-button');
    }

    async login(username, password) {
        await this.inputUserName.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();

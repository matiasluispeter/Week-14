class homePage {

    get btnAddtoCartBackPack() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get productsText() {
        return $('#header_container > div.header_secondary_container > span')
    }

    get btnBurguer() {
        return $('#react-burger-menu-btn')
    }

    get btnShopping() {
        return $('#shopping_cart_container > a')
    }

    get yourCart() {
        return $('#header_container > div.header_secondary_container > span')
    }

    get btnCheckOut() {
        return $('#checkout')
    }

    get inputFirstName() {
        return $('#first-name');
    }

    get inputLastName() {
        return $('#last-name');
    }

    get inputPostalCode() {
        return $('#postal-code');
    }

    get btnContinue() {
        return $('#continue')
    }

    get overview() {
        return $('#header_container > div.header_secondary_container > span')
    }

    get btnFinish() {
        return $('#finish')
    }

    get success() {
        return $('#checkout_complete_container > h2')
    }


    get backToProducts() {
        return $('#back-to-products')
    }

    get btnLogOut() {
        return $('#logout_sidebar_link')
    }

    async btnAddtoCartBackPackClick() {
        await this.btnAddtoCartBackPack.click();
    }

    async btnShoppingClick() {
        await this.btnShopping.click();
    }

    async btnCheckOutClick() {
        await this.btnCheckOut.click();
    }

    async fillForm(FirstName, LastName, PostalCode) {
        await this.inputFirstName.setValue(FirstName);
        await this.inputLastName.setValue(LastName);
        await this.inputPostalCode.setValue(PostalCode);
    }

    async btnContinueClick() {
        await this.btnContinue.click();
    }

    async btnFinishClick() {
        await this.btnFinish.click();
    }

    async backToProductsClick() {
        await this.backToProducts.click();
    }

    async btnBurguerClick() {
        await this.btnBurguer.click();
    }

    async btnLogOutClick() {
        await this.btnLogOut.click();
    }


}
export default new homePage();
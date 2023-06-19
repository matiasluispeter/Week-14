class form {

    get btnAddtoCart1() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get btnAddtoCart2() {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get btnAddtoCart3() {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    get btnAddtoCart4() {
        return $('#add-to-cart-sauce-labs-fleece-jacket');
    }

    get btnAddtoCart5() {
        return $('#add-to-cart-sauce-labs-onesie');
    }

    get btnAddtoCart6() {
        return $('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)');
    }

    async form(btnAddtoCart1, btnAddtoCart2, btnAddtoCart3, btnAddtoCart4, btnAddtoCart5, btnAddtoCart6) {
        await this.btnAddtoCart1.click();
        await this.btnAddtoCart2.click();
        await this.btnAddtoCart3.click();
        await this.btnAddtoCart4.click();
        await this.btnAddtoCart5.click();
        await this.btnAddtoCart6.click();
    }
}

export default new form();
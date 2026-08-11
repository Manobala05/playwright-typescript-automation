import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class cartpage extends BasePage {

    readonly productcount: Locator;
    readonly cartproductname: Locator;
    readonly productname: Locator;

    constructor(page: Page) {
        super(page);
        this.productcount = page.locator("//tbody/tr");
        this.cartproductname = page.locator("//tbody/tr/td[2]/h4/a");
        this.productname = page.locator("//tbody/tr/td[2]/h4/a");
    }

    async verufyProductsAreAdded() {
        const count = await this.productcount.count();
        expect(count).toBeGreaterThan(0);
    }

    async verifyproductname() {
        const productname = await this.cartproductname.nth(0).innerText();
        return productname;
    }
}

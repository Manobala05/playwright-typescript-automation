import { Page, Locator, expect } from "@playwright/test";

export class BasePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.page.setDefaultTimeout(60000);
        this.page.setDefaultNavigationTimeout(60000);
    }
//change in branch
    async click(locator: Locator) {
       await locator.click();
    }


    async fill(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async isVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }
}
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class checkout extends BasePage {


    readonly checkoutbutton: Locator;
    readonly deliveryaddress: Locator;
    readonly billingaddress: Locator;




constructor (page: Page){

        super(page);
        this.checkoutbutton = page.locator(".btn.btn-default.check_out");
        this.deliveryaddress = page.locator("#address_delivery");
        this.billingaddress = page.locator("#address_invoice");


}

async proceedcheckoutbutton()
{
    //await this.checkoutbutton.click();
    await this.click(this.checkoutbutton);
    console.log("Clicked Proceed to Checkout");

}


async verifydeliveryaddress()
{
    //await expect(this.deliveryaddress).toBeVisible();
    await this.isVisible(this.deliveryaddress);
    console.log("Verified Delivery Address");


}

async verifybillingaddress()
{   
    //await expect(this.billingaddress).toBeVisible();
    await this.isVisible(this.billingaddress);
    console.log("Verified Billing Address");
}

};
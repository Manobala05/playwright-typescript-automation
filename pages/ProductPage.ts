import {expect, Locator, Page} from '@playwright/test'
import { BasePage } from './basepage';

export class productpage extends BasePage {

    // POLP product locartor
    readonly poloProduct:Locator;
    readonly selectortext:Locator;
    


    //product selector

   readonly featureditems:Locator;
   readonly products:Locator;
   readonly clickcartbutton:Locator;

   //Proceed checkoutbutton
   readonly checkoutbutton:Locator;
   readonly productname:Locator;

   
    


    constructor (page: Page){
        super(page);


     //polo product locator

        this.poloProduct = this.page.locator("//a[@href='/brand_products/Polo']").first();
        this.selectortext = this.page.locator("h2.title.text-center").first();

        //product selection
        this.featureditems= this.page.locator(".features_items");
        this.products = this.page.locator(".col-sm-4 .product-image-wrapper")

        //viewcart button
        this.clickcartbutton = this.page.getByRole("link",{name:"View Cart"})

        //Proceed checkoutbutton
        this.checkoutbutton = this.page.getByRole("link",{name:"Proceed To Checkout"})

        this.productname = this.products.locator(".productinfo p")
        
    };

    

async clickPoloProduct()
{
    await this.click(this.poloProduct);
    await this.selectortext.waitFor({ state: 'visible' });
    const selectortitle = await this.selectortext.innerText();
    expect(selectortitle).toContain("POLO");
}


async selectingTheProduct(index:number) {
    if (await this.featureditems.isVisible()) {
        await this.products.nth(index).hover();
        await this.products.nth(index).locator(".btn.btn-default.add-to-cart").nth(0).click()
        await this.page.waitForTimeout(2000);
        
    }
}


async AddingProductCartandProceedcheckout(){
        await this.clickcartbutton.click();
       // await this.checkoutbutton.click();
}


async selectedProdcutName(index:number){
    if (await this.featureditems.isVisible()) {
        const name = await this.products.nth(index).locator(".productinfo p").innerText();
        return name;
    }
    return "";

}

}
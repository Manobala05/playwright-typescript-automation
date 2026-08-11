import {expect, Locator, Page} from '@playwright/test'
import { BasePage } from './basepage';


// export class Homepage {
//     readonly page: Page;
export class Homepage extends BasePage {
    readonly loggedInUser: Locator;
    readonly productslink:Locator;
    readonly cartlink:Locator;
    readonly Logoutlink:Locator;
    readonly deleteAccount:Locator;
    readonly Homepage:Locator;
    readonly logo:Locator;
    readonly featuredProducts:Locator;
    readonly recommendedItems:Locator;
    readonly subscribeTextbox:Locator;
    readonly subscribeButton:Locator;







    constructor( page: Page) {
      // constructor( page: Page) {
      super(page);
      // this.page = page;
        this.loggedInUser = this.page.locator("//a[contains(.,'Logged in as')]");
        this.productslink = this.page.getByRole("link", {name:" Products"});
        this.cartlink = this.page.getByRole("link", {name:" Cart"});
        this.Logoutlink = this.page.getByRole("link", {name:" Logout"});
        this.deleteAccount = this.page.getByRole("link", {name:" Delete Account"});
        this.logo = this.page.locator("//img[@alt='Website for automation practice']");
        this.Homepage = this.page.locator("body");
        this.featuredProducts = this.page.locator("//div[@class='features_items']");
        this.recommendedItems = this.page.locator("//div[@class='recommended_items']");
        this.subscribeTextbox = this.page.locator("//input[@id='susbscribe_email']");
        this.subscribeButton = this.page.locator("//i[@class='fa fa-arrow-circle-o-right']");

        



    }

    
    
async verifyLoginSuccess()
{
  // await this.loggedInUser.isVisible();
  await this.isVisible(this.loggedInUser);
}

async clickProducts()
{
  await this.click(this.productslink);
  await this.isVisible(this.featuredProducts);
}

async clickCart()
{
  await this.click(this.cartlink);
  await this.isVisible(this.productcount);
}

async verifylogoutisvisble()
{
 // this.Logoutlink.isVisible();
 await this.isVisible(this.Logoutlink);
}

async deleteAccountlink()
{
 // await this.deleteAccount.isVisible();
 await this.isVisible(this.deleteAccount);
}

async verifyhomepage()
{
 // await this.Homepage.isVisible();
 await this.isVisible(this.Homepage);
}

async verifyPageTitle()
{
  // const title = this.page.title;
  const title = await this.page.title();
  expect(title).toContain("Automation Exercise");
}
async verifylogo()
{
 // await expect(this.logo).toBeVisible();
 await this.isVisible(this.logo);
}

async VerifyFeaturedProducts()
{
 // await this.featuredProducts.isVisible();
 await this.isVisible(this.featuredProducts);
}

async VerifyRecommendedItems()  
{
 // await this.recommendedItems.isVisible();
 await this.isVisible(this.recommendedItems);
}

async SubscribewithValidEmail(email:string)
{
 // await this.subscribeTextbox.fill(email);
 // await this.subscribeButton.click();
 await this.fill(this.subscribeTextbox, email);
 await this.click(this.subscribeButton);
}






}
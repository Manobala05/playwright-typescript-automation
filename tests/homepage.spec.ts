import { test } from '../fixtures/baseFixture';
import homepageData from "../test-data/homepage.json";


test.skip('homepage test', async ({ homePage }) => {
    await homePage.verifyhomepage();
    await homePage.clickCart();
    await homePage.clickProducts();
    await homePage.verifylogoutisvisble();
    await homePage.verifyLoginSuccess();
    await homePage.deleteAccountlink();
    await homePage.verifylogo();
    await homePage.VerifyFeaturedProducts();
    await homePage.VerifyRecommendedItems();
});

test.skip("verify user can subscribe with vaida mail id", async ({ homePage }) => {
    await homePage.SubscribewithValidEmail(homepageData.subscribe.email);
    await homePage.page.waitForTimeout(5000);
});






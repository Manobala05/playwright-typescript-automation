import { test as base } from "@playwright/test";
import { Loginpage } from "../pages/Loginpage";
import { Homepage } from "../pages/Homepage";
import { productpage } from "../pages/ProductPage";
import { cartpage } from "../pages/CartPage";
import { checkout } from "../pages/CheckoutPage";

type MyFixtures = {
    loginPage: Loginpage;
    homePage: Homepage;
    productPage: productpage;
    cartPage: cartpage;
    checkoutPage: checkout;
};

export const test = base.extend<MyFixtures>({
    

    homePage: async ({ page }, use) => {
        ;
        await use(new Homepage(page));
    },

    productPage: async ({ page }, use) => {
        await page.goto("/", { waitUntil: "domcontentloaded" });
        await use(new productpage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new cartpage(page));
    },

    checkoutPage: async ({ page }, use) => {
        await use(new checkout(page));
    }
});
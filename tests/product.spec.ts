import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';

const index = 5;

test("verify user can select products from Polo brand", async ({ productPage }) => {
    await productPage.clickPoloProduct();
    await productPage.selectingTheProduct(2);
});
test("verify user can add produts to cart", async ({ productPage }) => {
    await productPage.clickPoloProduct();
    await productPage.selectingTheProduct(index);
    await productPage.selectedProdcutName(index);
});

test("verify user can proceed to checkout and place order", async ({ productPage }) => {
    await productPage.clickPoloProduct();
    await productPage.selectingTheProduct(index);
    await productPage.AddingProductToCart();
});
    

import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';
import loginData from '../test-data/login.json';



test("Verify added product is displayed in Cart", async ({ productPage, cartPage }) => {
    await productPage.clickPoloProduct();
    await productPage.selectingTheProduct(5);
    const expectedName = await productPage.selectedProdcutName(5);
    await productPage.AddingProductToCart();
    await cartPage.verufyProductsAreAdded();
    const actualName = await cartPage.verifyproductname();
    console.log(expectedName, actualName);
    expect(actualName).toBe(expectedName);
});
import { test } from "../fixtures/baseFixture";
import loginData from "../test-data/login.json";





test("verifyuserCanPlaceTheOrder", async ({

    
    homePage,
    productPage,
    cartPage,
    checkoutPage

})=>{


    await homePage.clickProducts();

    await productPage.clickPoloProduct();

    await productPage.selectingTheProduct(0);

    await productPage.AddingProductToCart();

    await cartPage.verufyProductsAreAdded();

    await cartPage.verifyproductname();

    await checkoutPage.proceedcheckoutbutton();
    
    await checkoutPage.verifydeliveryaddress();

    await checkoutPage.verifybillingaddress();

});
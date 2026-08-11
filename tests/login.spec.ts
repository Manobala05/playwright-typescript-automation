import { test } from "../fixtures/baseFixture";
import { Loginpage } from '../pages/Loginpage';
import loginData from "../test-data/login.json";


test("verify user can login with credentials", async ({ page }) => {

    const loginPage = new Loginpage(page);
    await loginPage.navigate();
    await loginPage.login(loginData.validUser.email, loginData.validUser.password);
    await loginPage.verifyLogin();

});
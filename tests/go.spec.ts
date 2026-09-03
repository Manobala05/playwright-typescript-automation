import { test } from "../fixtures/baseFixture";
import { Loginpage } from "../pages/Loginpage";
import { Go } from "../pages/go";
import loginData from "../test-data/login.json";

test.describe('Go navigation - Login tests', () => {
  test('should login with valid credentials', async ({ page }) => {
    const go = new Go(page);
    await go.login();

    const loginPage = new Loginpage(page);
    await loginPage.login(loginData.validUser.email, loginData.validUser.password);
    await loginPage.verifyLogin();
  });

  test('should show error for invalid credentials', async ({ page }) => {
    const go = new Go(page);
    await go.login();

    const loginPage = new Loginpage(page);
    await loginPage.login(loginData.invalidUser.email, loginData.invalidUser.password);
    await loginPage.verifyErrorMessage();
  });
});

import { Page, expect, Locator} from "@playwright/test"
import { BasePage } from "./basepage";

export class Loginpage extends BasePage {


    readonly emailTextbox: Locator;
    readonly passwordTextbox: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;
    readonly errorMessage: Locator;
    

    constructor(page: Page) {
        super(page);
        
        this.emailTextbox = page.getByPlaceholder("Email Address").nth(0);
        this.passwordTextbox = page.getByPlaceholder("Password");
        this.loginButton = page.getByRole("button", { name: "Login" });
        this.errorMessage = page.getByText("Your email or password is incorrect!");
        this.logoutButton = page.locator("a[href='/logout']");
    }

    async navigate() {
        await this.page.goto("/login", { waitUntil: 'load', timeout: 60000 });

        const loginField = this.page.locator('input[placeholder="Email Address"]');
        const isLoginFormVisible = await loginField.count() > 0;

        if (isLoginFormVisible) {
            await loginField.first().waitFor({ state: 'visible', timeout: 60000 });
            return;
        }

        // If already logged in, the login page may redirect to home.
        if (await this.isLoggedIn()) {
            return;
        }

        // Fallback: wait for either login form or logout link.
        await Promise.race([
            loginField.first().waitFor({ state: 'visible', timeout: 60000 }),
            this.logoutButton.waitFor({ state: 'visible', timeout: 60000 }),
        ]);
    }

    async isLoggedIn() {
        return await this.logoutButton.isVisible().catch(() => false);
    }

    async enterEmail(email: string) {
        await this.fill(this.emailTextbox, email);
    }

    async enterPassword(password: string) {
        await this.fill(this.passwordTextbox, password);
    }

    async clickLoginButton() {
        await this.click(this.loginButton);
    }

    async login(email: string, password: string) {
        if (await this.isLoggedIn()) {
            return;
        }

        await this.navigate();

        if (await this.isLoggedIn()) {
            return;
        }

        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async clickLogoutButton(){
        await this.logoutButton.click();
    }

    async verifyLogin(){
        await expect(this.logoutButton).toBeVisible();
    }

    async verifyErrorMessage(){
        await expect(this.errorMessage).toBeVisible();
    }
}


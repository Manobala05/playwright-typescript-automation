import { test as setup } from "@playwright/test";
import loginData from "../test-data/login.json";
import fs from "fs";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {

    await page.goto("/");

    await page.getByText("Signup / Login").click();

    await page
        .getByPlaceholder("Email Address")
        .nth(0)
        .fill(loginData.validUser.email);

    await page
        .getByPlaceholder("Password")
        .fill(loginData.validUser.password);

    await page.getByRole("button", { name: "Login" }).click();

    await page.getByText("Logged in as").waitFor();

    // Create .auth folder if it doesn't exist
    fs.mkdirSync("playwright/.auth", { recursive: true });

    // Save login session
    await page.context().storageState({
        path: authFile,
    });
});
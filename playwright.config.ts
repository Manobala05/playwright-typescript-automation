import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

console.log("BASE_URL:", process.env.BASE_URL);


export default defineConfig({

    testDir: './tests',

    fullyParallel: true,

    forbidOnly: false,

    retries: 0,

    workers: undefined,

    reporter: 'html',

    use: {
        baseURL: process.env.BASE_URL,
        headless: false,
        trace: 'on-first-retry',
        fullyParallel: 'true',
    },

    projects: [

        // First: login and create user.json
        {
            name: 'setup',
            testMatch: /auth\.setup\.ts/,
        },

        // Then: run normal tests using saved login session
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                storageState: 'playwright/.auth/user.json',
            },
            dependencies: ['setup'],
        },

    ],
});
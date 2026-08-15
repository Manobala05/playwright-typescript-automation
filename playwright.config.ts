import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

console.log("BASE_URL:", process.env.BASE_URL);


export default defineConfig({

    testDir: './tests',

    fullyParallel: false,

    forbidOnly: false,

    retries: 0,

    workers: 1,

    reporter: 'html',

    timeout: 60000,

    use: {
        baseURL: process.env.BASE_URL,
        headless: true,
        trace: 'on-first-retry',

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
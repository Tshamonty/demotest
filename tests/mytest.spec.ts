import { test, expect } from "@playwright/test";

test("login and go to dashboard", async ({ page }) => {

    // Step 1: Open login page
    await page.goto("https://rcmbeta.datavanced.com/login", { timeout: 80000 });

    // Step 2: Wait for page to load
    await page.waitForLoadState("networkidle");

    // Step 3: Enter username
    await page.fill('input[id="username"]', 'shamonty');

    // Step 4: Enter password
    await page.fill('input[id="password"]', '1212');

    // Step 5: Click login buttonnpx playwright
    await page.click('button.ant-btn-primary');

    // Step 6: Wait for dashboard to load
    await page.waitForLoadState("networkidle");

    // Step 7: Print current URL
    const url = await page.url();
    console.log("CURRENT URL IS: " + url);

    // Step 8: Verify dashboard URL
    await expect(page).toHaveURL(/dashboard/i);

});
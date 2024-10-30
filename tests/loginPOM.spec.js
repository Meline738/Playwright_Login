import { test, expect } from "@playwright/test";
import { login } from '../login/login.methods';

test("login to OrangeHRM", async ({ page }) => {
    await page.goto('/');
    await login(page,"Admin", "admin123");
    await expect(page).toHaveURL(/.*dashboard/);
    await page.waitForTimeout(4000);
    await page.close();

});


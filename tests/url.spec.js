const { test, expect } = require("@playwright/test");

test("Check the URL", async ({page}) => {
    await page.goto("https://automationexercise.com/");
    const url = page.url();
    expect(url).toContain("automation");
});
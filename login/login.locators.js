function getLoginLocators(page) {
        return {
        usernameInput: page.locator('//input[@placeholder="Username"]'),
        passwordInput: page.locator('//input[@placeholder="Password"]'),
        loginButton: page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button'),
    };
}

module.exports = getLoginLocators;

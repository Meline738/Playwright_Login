const getLoginLocators = require('./login.locators');

    async function login(page, username, password) {
        const locators = getLoginLocators(page);
        await locators.usernameInput.fill(username);
        await locators.passwordInput.fill(password);
        await locators.loginButton.click();
    }


module.exports = { login };

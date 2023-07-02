class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_textbox = page.locator('[id="user-name"]');
    this.password_textbox = page.locator('[id="password"]');
    this.login_button = page.locator('[id="login-button"]');
  }

  async gotoLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
}

module.exports = LoginPage;

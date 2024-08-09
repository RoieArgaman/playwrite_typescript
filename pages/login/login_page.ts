import { BasePage } from '../../framework/page';

class LoginPage extends BasePage {
    private get usernameInput(): string { return '#username'; }
    private get passwordInput(): string { return '#password'; }
    private get loginButton(): string { return '#loginButton'; }

    private get url(): string { return '/login'; }

    async enterUsername(username: string): Promise<void> {
        await this.fill(this.usernameInput, username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.fill(this.passwordInput, password);
    }

    async clickLoginButton(): Promise<void> {
        await this.click(this.loginButton);
    }

    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    // Optionally, override methods from BasePage if needed
    async open(): Promise<void> {
        await super.open(this.url); // Call the base class open method
    }
}
 export {LoginPage}
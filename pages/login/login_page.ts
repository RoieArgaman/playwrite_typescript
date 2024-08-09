import { BasePage } from '../../framework/page';

class LoginPage extends BasePage {
    private get emailInput(): string { return '[data-vfeature*="email"]'; }
    private get passwordInput(): string { return '[data-vfeature*="password"]'; }
    private get loginButton(): string { return '.auto_login_form_button'; }
    public get url(): string { return '/login'; }

    async enterEmail(username: string): Promise<void> {
        await this.fill(this.emailInput, username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.fill(this.passwordInput, password);
    }

    async clickLoginButton(): Promise<void> {
        await this.click(this.loginButton);
    }

    async login(username: string, password: string): Promise<void> {
        await this.enterEmail(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    // Optionally, override methods from BasePage if needed
    async open(): Promise<void> {
        await super.open(this.url); // Call the base class open method
    }
}
 export {LoginPage}
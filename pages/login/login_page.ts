import { BasePage } from '../../framework/page';

class LoginPage extends BasePage {
    private get emailInput(): string { return '[data-testid="input-email"]'; }
    private get passwordInput(): string { return '[data-testid="input-password"]'; }
    private get loginButton(): string { return '[data-testid="button-auth.signIn.buttonLabel"]'; }
    private get forgotYourPasswordButton(): string { return '[data-testid="link-auth.login.forgotPassword"]'; }
    private get getStartedButton(): string { return '[data-testid="link-Get started"]'; }
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

    async clickGetStartedButton(): Promise<void> {
        await this.click(this.getStartedButton);
    }

    async clickForgotYourPasswordButton(): Promise<void> {
        await this.click(this.forgotYourPasswordButton);
    }

    async login(username: string, password: string): Promise<void> {
        await this.enterEmail(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async open(): Promise<void> {
        await super.open(this.url); // Call the base class open method
    }
}
 export {LoginPage}
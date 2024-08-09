import { BasePage } from '../../framework/page';

class ForgotYourPasswordPage extends BasePage {
    private get emailInput(): string { return '[data-testid="input-email"]'; }
    private get resetPasswordButton(): string { return '[data-testid="button-auth.requestResetPassword.resetPasswordButton"]'; }
    public get url(): string { return '/request-reset-password'; }

    async enterEmail(username: string): Promise<void> {
        await this.fill(this.emailInput, username);
    }

    async clickResetPasswordButton(): Promise<void> {
        await this.click(this.resetPasswordButton);
    }

    // Optionally, override methods from BasePage if needed
    async open(): Promise<void> {
        await super.open(this.url); // Call the base class open method
    }
}
 export {ForgotYourPasswordPage}
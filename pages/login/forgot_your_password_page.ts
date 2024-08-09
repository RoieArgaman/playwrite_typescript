import { BasePage } from '../../framework/page';

class ForgotYourPasswordPage extends BasePage {
    private get emailInput(): string { return '.auto_forgot-password_form_text-field'; }
    private get resetPasswordButton(): string { return '.auto_forgot-password_form_button'; }
    public get url(): string { return '/resetpassword'; }

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
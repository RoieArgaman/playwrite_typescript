import { BasePage } from '../../framework/page';
import {TextInput} from "../../components/textInput";

class LoginPage extends BasePage {
    public get emailInput(): TextInput { return new TextInput(this.page, '[data-testid="input-email"]'); }
    public get passwordInput(): TextInput { return new TextInput(this.page, '[data-testid="input-password"]'); }
    private get loginButton(): string { return '[data-testid="button-auth.signIn.buttonLabel"]'; }
    private get forgotYourPasswordButton(): string { return '[data-testid="link-auth.login.forgotPassword"]'; }
    private get getStartedButton(): string { return '[data-testid="link-Get started"]'; }
    public get url(): string { return '/login'; }


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
        await this.emailInput.enter_text(username);
        await this.passwordInput.enter_text(password);
        await this.clickLoginButton();
    }

    async open(): Promise<void> {
        await super.open(this.url); // Call the base class open method
    }
}
 export {LoginPage}
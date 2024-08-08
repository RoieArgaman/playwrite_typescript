import {BasePage} from "../framework/page";

export class LoginPage extends BasePage {
    // Define selectors as getters
    private get usernameSelector(): string {
        return '#username';
    }

    private get passwordSelector(): string {
        return '#password';
    }

    private get loginButtonSelector(): string {
        return '#loginButton';
    }

    constructor(page: BasePage) {
        super(page);
    }

    // Method to enter the username
    async enterUsername(username: string): Promise<void> {
        await this.fill(this.usernameSelector, username);
    }

    // Method to enter the password
    async enterPassword(password: string): Promise<void> {
        await this.fill(this.passwordSelector, password);
    }

    // Method to click the login button
    async clickLoginButton(): Promise<void> {
        await this.click(this.loginButtonSelector);
    }

    // Method to log in
    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}

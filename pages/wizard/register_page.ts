import { BasePage } from '../../framework/page';

class RegisterPage extends BasePage {
    private get emailAndPasswordButton(): string { return '[data-testid="button-auth.signUpCondensed.signInWithEmail"]'; }
    public get url(): string { return '/register'; }

    async clickEmailAndPasswordButton(): Promise<void> {
        await this.click(this.emailAndPasswordButton);
    }

    async open(): Promise<void> {
        await super.open(this.url); // Call the base class open method
    }
}
 export {RegisterPage}
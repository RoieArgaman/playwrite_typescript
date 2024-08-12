import { BasePage } from '../../framework/page';

class RegisterPage extends BasePage {
    public get url(): string { return '/register'; }
    private get emailAndPasswordButton(): string { return '[data-testid="button-auth.signUpCondensed.signInWithEmail"]'; }
    async clickEmailAndPasswordButton(): Promise<void> {
        await this.click(this.emailAndPasswordButton);
    }

    async open(): Promise<void> {
        await super.open(this.url);
    }
}

 export {RegisterPage}
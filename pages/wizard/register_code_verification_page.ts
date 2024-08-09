import { BasePage } from '../../framework/page';

class RegisterCodeVerificationPage extends BasePage {
    private get codeInput(): string { return '???'; } // Need to understand how to implement
    public get url(): string { return '/register'; }

    async open(): Promise<void> {
        await super.open(this.url); // Call the base class open method
    }
}
 export {RegisterCodeVerificationPage}
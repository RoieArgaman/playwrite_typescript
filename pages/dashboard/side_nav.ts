import { BasePage } from '../../framework/page';

class SideNav extends BasePage {
    private get pay_tab(): string { return '[data-testid="pay_tab"]'; } // need to verify the real css
    public get url(): string { return '/pay'; } // need to verify the real url

    async clickPayTab(): Promise<void> {
        await this.click(this.pay_tab);
    }

    async open(): Promise<void> {
        await super.open(this.url); // Call the base class open method
    }
}
 export {SideNav}
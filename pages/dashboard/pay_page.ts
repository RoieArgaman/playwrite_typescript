import { BasePage } from '../../framework/page';


class PayPage extends BasePage {
    get vendors(): Vendors { return new Vendors(this.page)}
    private get vendorsTab(): string { return '[data-testid="vendors_tab"]'; } // need to verify the real css
    public get url(): string { return '/vendors'; } // need to verify the real url

    async clickVendorsTab(): Promise<void> {
        await this.click(this.vendorsTab);
    }

    async open(): Promise<void> {
        await super.open(this.url); // Call the base class open method
    }
}
 export {PayPage}

class Vendors extends PayPage {
}
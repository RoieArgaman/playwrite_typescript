import {BasePage} from '../../framework/page';
import {Button} from "../../components/button";
import {TextInput} from "../../components/textInput";
import {AddVendorFactory} from "../../webForms/vendor";
import {Table} from "../../components/table";
import {BaseComponent} from "../../framework/component";
import {Page} from "playwright";


class PayPage extends BasePage {
    public get url(): string { return '/melio/pay-dashboard/vendors'; }
    get vendors(): Vendors { return new Vendors(this.page) }
    get addVendorPage(): AddVendorsPage { return new AddVendorsPage(this.page) }
    private get vendorsTab(): string { return '[data-testid="pay-dashboard-activity-pay-dashboard-tabs-list-tab-vendors"]'; }
    async clickVendorsTab(): Promise<void> { await this.click(this.vendorsTab); }
    async open(): Promise<void> { await super.open(this.url); }
}

export {PayPage}

class Vendors extends PayPage {
    public get addVendorsButton(): Button { return new Button(this.page, '[data-testid="vendors-tab-add-vendor-button"]'); }
    public get allVendorsTable(): Table{ return new Table(this.page, '[data-testid="pay-dashboard-vendors-tab"] [data-testid="table-container"] [data-component="Table"]'); }
    public get searchInput(): TextInput { return new TextInput(this.page, '[data-testid="search-input" ]'); }
    public get vendorDetailsDrawer(): VendorDetailsDrawer {return new VendorDetailsDrawer(this.page, '[data-testid="pay-dashboard-vendor-drawer"]')}
}

class AddVendorsPage extends BasePage {
    public get url(): string { return '/melio/vendors/new-vendor'; }
    public get addVendorDataPage(): AddVendorDataPage { return new AddVendorDataPage(this.page) }
    public get receivePaymentPreferencesPage(): ReceivePaymentPreferencesPage { return new ReceivePaymentPreferencesPage(this.page) }

}

class ReceivePaymentPreferencesPage extends AddVendorsPage {
    public get skipForNowButton(): Button { return new Button(this.page, '[data-testid="layout-next-button"]'); }
}

class AddVendorDataPage extends AddVendorsPage {
    public get url(): string { return 'melio/vendors/new-vendor';}
    public get businessNameInput(): TextInput { return new TextInput(this.page, '[data-testid="form-input-companyName"]');}
    public get contactNameInput(): TextInput { return new TextInput(this.page, '[data-testid="form-input-fullName"]');}
    public get emailInput(): TextInput { return new TextInput(this.page, '[data-testid="form-input-email"]');}
    public get phoneInput(): TextInput { return new TextInput(this.page, '[data-testid="form-input-phone"]');}
    public get continueButton(): Button { return new Button(this.page, '[data-testid="continue-button"]');}
    public get closeButton(): Button { return new Button(this.page, '[data-testid="layout-close-button"]');}

    async fillAddVendorPage(data: AddVendorFactory): Promise<void> {
        if (data.businessName) { await this.businessNameInput.enter_text(data.businessName); }
        if (data.contactName) { await this.contactNameInput.enter_text(data.contactName); }
        if (data.email) { await this.emailInput.enter_text(data.email); }
        if (data.phoneNumber) { await this.phoneInput.enter_text(data.phoneNumber); }
        await this.sleep(2000)
    }

    async addVendor(data: AddVendorFactory): Promise<void> {
        await this.fillAddVendorPage(data)
        await this.continueButton.click()
        await this.receivePaymentPreferencesPage.skipForNowButton.click()
    }
}

class VendorDetailsDrawer extends BaseComponent {
    private get companyName(): string {return '[data-testid="form-field-companyName"]'}
    private get fullName(): string {return '[data-testid="form-field-fullName"]'}
    private get email(): string {return '[data-testid="form-field-email"]'}
    private get phone(): string {return '[data-testid="form-field-phone"]'}

    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    private async getVendorDetails(fieldName: string): Promise<string | null> {
        const fieldLocator = this.page.locator(fieldName);
        const fieldGroupLocators = fieldLocator.locator('[data-component="Group"]');
        const fieldGroupLocator = fieldGroupLocators.first();
        return await fieldGroupLocator.textContent();
    }

    async getCompanyName(){ return await this.getVendorDetails(this.companyName) }
    async getFullName(){ return await this.getVendorDetails(this.fullName) }
    async getEmail(){ return await this.getVendorDetails(this.email) }
    async getPhone(){ return await this.getVendorDetails(this.phone) }

    async getFullVendorDetails(): Promise<AddVendorFactory>{
        return new AddVendorFactory({
            businessName: await this.getCompanyName(),
            contactName: await this.getFullName(),
            email: await this.getEmail(),
            phoneNumber: await this.getPhone()
        });
    }

}
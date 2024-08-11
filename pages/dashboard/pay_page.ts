import {BasePage} from '../../framework/page';
import {Button} from "../../components/button";
import {TextInput} from "../../components/text_input";
import {AddVendorFactory} from "../../webDataFactory/vendor";


class PayPage extends BasePage {
    get vendors(): Vendors {
        return new Vendors(this.page)
    }

    get addVendorPage(): AddVendorsPage {
        return new AddVendorsPage(this.page)
    }

    private get vendorsTab(): string {
        return '[data-testid="pay-dashboard-activity-pay-dashboard-tabs-list-tab-vendors"]';
    }

    public get url(): string {
        return '/melio/pay-dashboard/vendors';
    }

    async clickVendorsTab(): Promise<void> {
        await this.click(this.vendorsTab);
    }

    async open(): Promise<void> {
        await super.open(this.url); // Call the base class open method
    }
}

export {PayPage}

class Vendors extends PayPage {
    public get addVendorsButton(): Button {
        return new Button(this.page, '[data-testid="vendors-tab-add-vendor-button"]');
    }
    // public get allVendorsTable(): Table{ }
}

class AddVendorsPage extends BasePage {
    public get url(): string { return '/melio/vendors/new-vendor';}
    public get addVendorDataPage(): AddVendorDataPage {return new AddVendorDataPage(this.page)}
    public get receivePaymentPreferencesPage(): ReceivePaymentPreferencesPage {return new ReceivePaymentPreferencesPage(this.page)}

}

class ReceivePaymentPreferencesPage extends AddVendorsPage {
    public get skipForNowButton(): Button {return new Button(this.page, '[data-testid="layout-next-button"]');}
}

class AddVendorDataPage extends AddVendorsPage {
    public get businessNameInput(): TextInput { return new TextInput(this.page, '[data-testid="form-input-companyName"]');}
    public get contactNameInput(): TextInput { return new TextInput(this.page, '[data-testid="form-input-fullName"]');}
    public get emailInput(): TextInput { return new TextInput(this.page, '[data-testid="form-input-email"]');}
    public get phoneInput(): TextInput { return new TextInput(this.page, '[data-testid="form-input-phone"]');}
    public get continueButton(): Button { return new Button(this.page, '[data-testid="continue-button"]');}
    public get closeButton(): Button { return new Button(this.page, '[data-testid="layout-close-button"]');}

    async fillAddVendorPage(data: AddVendorFactory): Promise<void> {

        if (data.businessName) {
            await this.businessNameInput.enter_text(data.businessName);
        }
        if (data.contactName) {
            await this.contactNameInput.enter_text(data.contactName);
        }
        if (data.email) {
            await this.emailInput.enter_text(data.email);
        }
        if (data.phoneNumber) {
            await this.phoneInput.enter_text(data.phoneNumber);
        }

        await this.sleep(2000)
    }

}
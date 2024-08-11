import {generateData} from "../framework/dataGenerator";
interface VendorPageData {
    businessName?: string;
    contactName?: string;
    email?: string;
    phoneNumber?: string;
}

export class AddVendorFactory implements VendorPageData{
    public businessName: string;
    public contactName: string;
    public email: string;
    public phoneNumber: string;

    constructor() {
        this.businessName = generateData().BUSINESS_NAME;
        this.contactName = generateData().FULL_NAME
        this.email = generateData().EMAIL;
        this.phoneNumber = generateData().PHONE;

    }
}
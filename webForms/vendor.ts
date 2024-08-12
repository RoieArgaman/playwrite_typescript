import { generateData } from "../framework/dataGenerator";
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

    constructor(options: VendorPageData = {}) {
    this.businessName = options.businessName || generateData().BUSINESS_NAME;
    this.contactName = options.contactName || generateData().FULL_NAME;
    this.email = options.email || generateData().EMAIL;
    this.phoneNumber = options.phoneNumber || generateData().PHONE;
  }
}
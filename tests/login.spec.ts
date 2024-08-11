import { test , expect} from './conftest';
import { GlobalVariables } from "../framework/global_variables";
import { AddVendorFactory} from "../webDataFactory/vendor";

test.describe('Login page', () => {
  test('should create vendor successfully - case 1', async ({webFlows}) => {
    await webFlows.loginFlows.loginPage.open()
    await webFlows.loginFlows.loginPage.login(GlobalVariables.USERNAME, GlobalVariables.PASSWORD);
    await webFlows.dashboardFlows.sideNav.clickPayTab()
    await webFlows.dashboardFlows.payPage.clickVendorsTab()
    await webFlows.dashboardFlows.payPage.vendors.addVendorsButton.click()
    await webFlows.dashboardFlows.payPage.vendors.addVendorPage.addVendorDataPage.fillAddVendorPage(new AddVendorFactory())
    await webFlows.dashboardFlows.payPage.vendors.addVendorPage.addVendorDataPage.continueButton.click()
    await webFlows.dashboardFlows.payPage.vendors.addVendorPage.receivePaymentPreferencesPage.skipForNowButton.click()
    let r =15
  });

});
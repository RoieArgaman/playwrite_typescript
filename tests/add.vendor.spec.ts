import { test , expect} from './conftest';
import { GlobalVariables } from "../framework/globalVariables";
import { AddVendorFactory} from "../webForms/vendor";
import {generateData} from "../framework/dataGenerator";


test.describe('Login page', () => {
  test('should create vendor successfully - case 1', async ({webFlows}) => {
    await webFlows.loginFlows.loginPage.open()
    await webFlows.loginFlows.loginPage.login(GlobalVariables.USERNAME, GlobalVariables.PASSWORD);
    await webFlows.dashboardFlows.payPage.vendors.addVendorsButton.click()
    let vendorData = new AddVendorFactory()
    await webFlows.dashboardFlows.payPage.vendors.addVendorPage.addVendorDataPage.addVendor(vendorData)
    await webFlows.dashboardFlows.payPage.sleep(2000)
    await webFlows.dashboardFlows.payPage.vendors.searchInput.enter_text(vendorData.businessName)
    await webFlows.dashboardFlows.payPage.keyboardActions.pressEnter()
    await webFlows.dashboardFlows.payPage.vendors.allVendorsTable.waitForNumberOfRows(1)
    expect(await webFlows.dashboardFlows.payPage.vendors.allVendorsTable.getNumberOfRows()).toEqual(1);

    await webFlows.dashboardFlows.payPage.vendors.allVendorsTable.clickOnRow()
    let drawerVendorData = await webFlows.dashboardFlows.payPage.vendors.vendorDetailsDrawer.getFullVendorDetails()
    expect(drawerVendorData).toEqual(vendorData)
  });

  test('should verify vendor name already exist - case 2', async ({webFlows}) => {
    await webFlows.loginFlows.loginPage.open()
    await webFlows.loginFlows.loginPage.login(GlobalVariables.USERNAME, GlobalVariables.PASSWORD);
    await webFlows.dashboardFlows.sideNav.clickPayTab()
    await webFlows.dashboardFlows.payPage.clickVendorsTab()
    await webFlows.dashboardFlows.payPage.vendors.addVendorsButton.click()
    let vendorData = new AddVendorFactory()
    await webFlows.dashboardFlows.payPage.vendors.addVendorPage.addVendorDataPage.addVendor(vendorData)
    await webFlows.dashboardFlows.payPage.sleep(2000)
    await webFlows.dashboardFlows.payPage.vendors.addVendorsButton.click()
    await webFlows.dashboardFlows.payPage.vendors.addVendorPage.addVendorDataPage.addVendor(new AddVendorFactory({businessName: vendorData.businessName}))
    expect(await webFlows.dashboardFlows.payPage.vendors.addVendorPage.addVendorDataPage.isInPage()).toBeFalsy()
    expect(await webFlows.dashboardFlows.payPage.vendors.addVendorPage.addVendorDataPage.businessNameInput.isErrorVisible()).toEqual(true);
  });

  test('should verify vendor email is valid - case 2', async ({webFlows}) => {
    await webFlows.loginFlows.loginPage.open()
    await webFlows.loginFlows.loginPage.login(GlobalVariables.USERNAME, GlobalVariables.PASSWORD);
    await webFlows.dashboardFlows.sideNav.clickPayTab()
    await webFlows.dashboardFlows.payPage.clickVendorsTab()
    await webFlows.dashboardFlows.payPage.vendors.addVendorsButton.click()
    let vendorData = new AddVendorFactory({email:generateData().INVALID_EMAIL})
    await webFlows.dashboardFlows.payPage.vendors.addVendorPage.addVendorDataPage.fillAddVendorPage(vendorData)
    await webFlows.dashboardFlows.payPage.vendors.addVendorPage.addVendorDataPage.continueButton.click()
    await webFlows.dashboardFlows.payPage.sleep(2000)
    expect(await webFlows.dashboardFlows.payPage.vendors.addVendorPage.addVendorDataPage.isInPage()).toBeFalsy()
    expect(await webFlows.dashboardFlows.payPage.vendors.addVendorPage.addVendorDataPage.businessNameInput.isErrorVisible()).toEqual(true);
  });

});
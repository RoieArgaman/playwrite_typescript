import { test , expect} from './conftest';
import { GlobalVariables } from "../framework/global_variables";

test.describe('Login page', () => {
  test('should create vendor successfully - case 1', async ({webFlows}) => {
    await webFlows.loginFlows.loginPage.open()
    expect(await webFlows.loginFlows.loginPage.is_in_page()).toBeTruthy()
    await webFlows.loginFlows.loginPage.login(GlobalVariables.USERNAME, GlobalVariables.PASSWORD);
    await webFlows.dashboardFlows.sideNav.clickPayTab()
    await webFlows.dashboardFlows.payPage.clickVendorsTab()
    let r =15
  });

});
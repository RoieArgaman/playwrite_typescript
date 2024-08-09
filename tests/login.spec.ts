import { testSetup , expect} from './conftest';

testSetup.describe('Login page', () => {
  testSetup('should open login page and verify it opened', async ({webFlows}) => {
    await webFlows.loginFlows.loginPage.open()
    expect(await webFlows.loginFlows.loginPage.is_in_page()).toBeTruthy()
  });

  testSetup('should open login page and redirect to forgot your password', async ({webFlows}) => {
    await webFlows.loginFlows.loginPage.open()
    await webFlows.loginFlows.loginPage.clickForgotYourPasswordButton()
    expect(await webFlows.loginFlows.forgotYourPasswordPage.is_in_page()).toBeTruthy()
  });

  testSetup('should open forgot your password page and verify it opened', async ({webFlows}) => {
    await webFlows.loginFlows.forgotYourPasswordPage.open()
    expect(await webFlows.loginFlows.forgotYourPasswordPage.is_in_page()).toBeTruthy()
  });

  testSetup('should register flow', async ({webFlows}) => {
    await webFlows.loginFlows.loginPage.open()
    await webFlows.loginFlows.loginPage.clickGetStartedButton()
    expect(await webFlows.wizardFlows.registerPage.is_in_page()).toBeTruthy()
    await webFlows.wizardFlows.registerPage.clickEmailAndPasswordButton()
    expect(await webFlows.wizardFlows.registerPage.is_in_page()).toBeTruthy()
  });
});
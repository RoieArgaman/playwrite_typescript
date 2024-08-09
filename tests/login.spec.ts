import {expect} from '@playwright/test';
import { testSetup } from './conftest';

testSetup.describe('Login page', () => {
  testSetup('should open login page and verify it opened', async ({pageManager}) => {
    await pageManager.loginFlows.loginPage.open()
    expect(await pageManager.loginFlows.loginPage.is_in_page()).toBeTruthy()
  });

  testSetup('should open login page and redirect to forgot your password', async ({pageManager}) => {
    await pageManager.loginFlows.loginPage.open()
    await pageManager.loginFlows.loginPage.clickForgotYourPasswordButton()
    expect(await pageManager.loginFlows.forgotYourPasswordPage.is_in_page()).toBeTruthy()
  });

  testSetup('should open forgot your password page and verify it opened', async ({pageManager}) => {
    await pageManager.loginFlows.forgotYourPasswordPage.open()
    expect(await pageManager.loginFlows.forgotYourPasswordPage.is_in_page()).toBeTruthy()
  });
});
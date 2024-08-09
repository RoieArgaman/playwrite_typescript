import {expect} from '@playwright/test';
import { testSetup } from './conftest';

testSetup.describe('Login page', () => {
  testSetup('should open login page and verify it opened', async ({pageManager}) => {
    await pageManager.loginFlows.loginPage.open()
    expect(await pageManager.loginFlows.loginPage.is_in_page()).toBeTruthy()
  });
});
import {expect} from '@playwright/test';
import { testSetup } from './conftest';

testSetup.describe('Login page', () => {
  testSetup('should open login page and verify it opened', async ({pageManager}) => {
    await pageManager.loginPage.open()
    expect(await pageManager.loginPage.is_in_page()).toBeTruthy()
  });
});
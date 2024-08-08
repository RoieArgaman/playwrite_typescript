import { test, expect, type Page } from '@playwright/test';

test.describe('Login page', () => {
  test('should open login page and verify it opened', async ({ page }) => {
    // create a new todo locator
    const newTodo = page.getByPlaceholder('What needs to be done?');
    

  });
});
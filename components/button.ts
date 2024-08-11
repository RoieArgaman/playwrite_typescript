import { Page } from '@playwright/test';
import { BaseComponent } from '../framework/component';

export class Button extends BaseComponent {
  constructor(page: Page, selector: string) {
    super(page, selector);
  }

  async click(): Promise<void> {
    await this.locator.click();
  }

  async isEnabled(): Promise<boolean> {
    return await this.locator.isEnabled();
  }

  async waitForEnabled(timeout: number = 3000): Promise<void> {
    const startTime = Date.now();
    while (true) {
      const isEnabled = await this.isEnabled();
      if (isEnabled) {
        return
      }

      if (Date.now() - startTime > timeout) {
        throw new Error('Timeout exceeded while waiting for element to be enabled');
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
}

import { Page } from '@playwright/test';
import { BaseComponent } from '../framework/component';

export class Button extends BaseComponent {
  constructor(page: Page, selector: string) {
    super(page, selector);
  }

  async click(): Promise<void> {
    await this.locator.click();
  }
}

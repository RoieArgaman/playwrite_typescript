import {Page, Locator} from '@playwright/test';

export abstract class BaseComponent {
    protected page: Page;
    protected locator: Locator;

    protected constructor(page: Page, selector: string) {
        this.page = page;
        this.locator = page.locator(selector);
    }

    async isVisible(): Promise<boolean> {
        return this.locator.isVisible();
    }

    async waitForVisible(timeout: number = 3000): Promise<void> {
        await this.locator.waitFor({state: 'visible', timeout});
    }

    async waitForInvisible(timeout: number = 3000): Promise<void> {
        await this.locator.waitFor({state: 'hidden', timeout});
    }

}

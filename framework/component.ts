import {
    Page,
    Locator,
    test,
    TestType,
    PlaywrightTestArgs,
    PlaywrightTestOptions,
    PlaywrightWorkerArgs, PlaywrightWorkerOptions
} from '@playwright/test';

export abstract class BaseComponent {
    protected page: Page;
    protected locator: Locator;
    protected test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>;

    protected constructor(page: Page, selector: string) {
        this.page = page;
        this.locator = page.locator(selector);
        this.test = test;
    }

    async isInComponent(): Promise<boolean> {
        return this.locator.isVisible();
    }

    async waitForVisible(timeout: number = 3000): Promise<void> {
        await this.locator.waitFor({state: 'visible', timeout});
    }

    async waitForInvisible(timeout: number = 3000): Promise<void> {
        await this.locator.waitFor({state: 'hidden', timeout});
    }

    async click(selector: string): Promise<void> {
        await this.locator.locator(selector).click()
    }

    async sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

}

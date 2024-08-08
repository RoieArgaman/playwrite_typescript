import { chromium, Browser, Page, BrowserType } from 'playwright';

export class BrowserWrapper {
    private browser: Browser;
    private browserType: BrowserType<Browser>;

    constructor(browserType: BrowserType<Browser>) {
        this.browserType = browserType;
    }

    // Launch the browser
    async launch(options?: { headless?: boolean; args?: string[] }): Promise<void> {
        this.browser = await this.browserType.launch(options);
    }

    // Create a new page
    async newPage(): Promise<Page> {
        if (!this.browser) {
            throw new Error('Browser is not launched.');
        }
        return await this.browser.newPage();
    }

    // Close the browser
    async close(): Promise<void> {
        if (this.browser) {
            await this.browser.close();
        }
    }

    // Get the underlying Playwright browser instance
    getBrowser(): Browser {
        if (!this.browser) {
            throw new Error('Browser is not launched.');
        }
        return this.browser;
    }
}

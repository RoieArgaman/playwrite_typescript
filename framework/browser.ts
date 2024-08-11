import {chromium, Browser, BrowserContext, Page} from 'playwright';

class BrowserManager {
    private static instance: BrowserManager;
    private browser: Browser;

    private constructor() {
    }

    public static async getInstance(): Promise<BrowserManager> {
        if (!BrowserManager.instance) {
            BrowserManager.instance = new BrowserManager();
            await BrowserManager.instance.init();
        }
        return BrowserManager.instance;
    }

    private async init() {
        this.browser = await chromium.launch({headless: false});
    }

    public async createContextAndPage(): Promise<{ context: BrowserContext; page: Page }> {
        const context = await this.browser.newContext({
            userAgent: 'qa-automation-homework'
        });
        const page = await context.newPage();
        return {context, page};
    }

    public async close() {
        await this.browser.close();
    }
}

export {BrowserManager};

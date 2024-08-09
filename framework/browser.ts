import { chromium, Browser, BrowserContext, Page } from 'playwright';

class BrowserManager {
    private static instance: BrowserManager;
    private browser: Browser;
    private context: BrowserContext;
    private page: Page;

    private constructor() {}

    public static async getInstance(): Promise<BrowserManager> {
        if (!BrowserManager.instance) {
            BrowserManager.instance = new BrowserManager();
            await BrowserManager.instance.init();
        }
        return BrowserManager.instance;
    }

    private async init() {
        // Launch the browser
        this.browser = await chromium.launch({ headless: false });

        // Create a new browser context
        this.context = await this.browser.newContext();

        // Create a new page
        this.page = await this.context.newPage();
    }

    public getPage(): Page {
        return this.page;
    }

    public async close() {
        await this.browser.close();
    }
}

export { BrowserManager };

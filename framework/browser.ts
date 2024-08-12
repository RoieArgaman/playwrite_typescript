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
        const context = await ContextFactory.createContext(this.browser);
        // const context = await this.browser.newContext({
        //     userAgent: 'qa-automation-homework'
        // });
        const page = await context.newPage();
        return {context, page};
    }

    public async close() {
        await this.browser.close();
    }
}

export {BrowserManager};


interface ContextOptions {
  viewport?: { width: number; height: number };
  userAgent?: string;
}

export class ContextFactory {
  private static defaultOptions: ContextOptions = {
    viewport: { width: 1280, height: 720 },
    userAgent: 'qa-automation-homework',

  };

  static async createContext(browser: Browser, options: ContextOptions = {}): Promise<BrowserContext> {
    const mergedOptions = { ...this.defaultOptions, ...options };

    return await browser.newContext({
      viewport: mergedOptions.viewport,
      userAgent: mergedOptions.userAgent
    });
  }
}

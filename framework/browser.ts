import { chromium, firefox, webkit, Browser, BrowserContext, Page } from 'playwright';

class BrowserManager {
    private static instance: BrowserManager;
    private browser: Browser;
    private readonly browserType: string; // Browser type can be passed dynamically

    private constructor(browserType: string) {
        this.browserType = browserType; // Store the browser type
    }

    public static async getInstance(browserType: string): Promise<BrowserManager> {
        if (!BrowserManager.instance) {
            BrowserManager.instance = new BrowserManager(browserType);
            await BrowserManager.instance.init();
        }
        return BrowserManager.instance;
    }

    private async init() {
        switch (this.browserType) {
            case 'chromium':
                this.browser = await chromium.launch({ headless: false });
                break;
            case 'firefox':
                this.browser = await firefox.launch({ headless: false });
                break;
            case 'webkit':
                this.browser = await webkit.launch({ headless: false });
                break;
            default:
                this.browser = await chromium.launch({ headless: false });
        }
    }

    public async createContextAndPage(): Promise<{ context: BrowserContext; page: Page }> {
        const context = await ContextFactory.createContext(this.browser);
        const page = await context.newPage();
        return { context, page };
    }

    public async close() {
        await this.browser.close();
    }
}

export { BrowserManager };


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

import { Page } from 'playwright';
import {GlobalPaths} from "./global_variables";

class BasePage {
    protected page: Page;
    public get url(): string { return '/login'; }
    constructor(page: Page) {
        this.page = page;
    }

    async click(selector: string): Promise<void> {
        await this.page.click(selector);
    }

    async fill(selector: string, value: string): Promise<void> {
        await this.page.fill(selector, value);
    }

    async getText(selector: string): Promise<string> {
        return await this.page.textContent(selector) || '';
    }

    async open(url: string): Promise<void> {
        let fullPath = GlobalPaths.BASE_URL + url
        await this.page.goto(fullPath);
    }

    async isInPage(): Promise<boolean> {
        const currentUrl = this.page.url();
        return currentUrl === GlobalPaths.BASE_URL + this.url;
    }

    async sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}

export {BasePage}
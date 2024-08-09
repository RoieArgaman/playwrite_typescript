import { Page } from 'playwright';
import {GlobalPaths} from "./global_variables";

class BasePage {
    protected page: Page;
    public get url(): string { return '/login'; }
    constructor(page: Page) {
        this.page = page;
    }

    // Example method to click an element by selector
    async click(selector: string): Promise<void> {
        await this.page.click(selector);
    }

    // Example method to fill an input field
    async fill(selector: string, value: string): Promise<void> {
        await this.page.fill(selector, value);
    }

    // Example method to get the text content of an element
    async getText(selector: string): Promise<string> {
        return await this.page.textContent(selector) || '';
    }

    // Example method to navigate to a URL
    async open(url: string): Promise<void> {
        let fullPath = GlobalPaths.BASE_URL + url
        await this.page.goto(fullPath);
    }

    public async is_in_page(): Promise<boolean> {
        const currentUrl = this.page.url();
        return currentUrl === GlobalPaths.BASE_URL + this.url;
    }
}

export {BasePage}
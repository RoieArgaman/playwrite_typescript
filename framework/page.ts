import { Page } from 'playwright';
import {ElementHandle} from "@playwright/test";

export class BasePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

     // Method to select a single element
    async querySelector(selector: string): Promise<ElementHandle | null> {
        return await this.page.$(selector);
    }

    // Method to select multiple elements
    async QuerySelectorAll(selector: string): Promise<ElementHandle[]> {
        return await this.page.$$(selector);
    }

    // Example method to navigate to a URL
    async open(url: string): Promise<void> {
        await this.page.goto(url);
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

}

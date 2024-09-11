import { Page } from 'playwright';
import {GlobalPaths} from "./globalVariables";
import {
    PlaywrightTestArgs,
    PlaywrightTestOptions,
    PlaywrightWorkerArgs,
    PlaywrightWorkerOptions,
    test,
    TestType
} from "@playwright/test"

class BasePage {
    protected page: Page;
    protected test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>;
    public get url(): string { return '/login'; }
    public get keyboardActions(): KeyboardActions{ return new KeyboardActions(this.page) }
    
    constructor(page: Page) {
        this.page = page;
        this.test = test
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
        if (this.url === ''){ return true}
        return currentUrl === GlobalPaths.BASE_URL + this.url;
    }

    async sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}

export {BasePage}


class KeyboardActions extends BasePage {
    private async pressKey(key: string): Promise<void> {
        await this.page.keyboard.press(key);
    }

    async pressF5(): Promise<void> { await this.pressKey('F5'); }
    async pressBackslash(): Promise<void> { await this.pressKey('Backslash'); }
    async pressBackspace(): Promise<void> { await this.pressKey('Backspace'); }
    async pressTab(): Promise<void> { await this.pressKey('Tab'); }
    async pressDelete(): Promise<void> { await this.pressKey('Delete'); }
    async pressEscape(): Promise<void> { await this.pressKey('Escape'); }
    async pressArrowDown(): Promise<void> { await this.pressKey('ArrowDown'); }
    async pressEnd(): Promise<void> { await this.pressKey('End'); }
    async pressEnter(): Promise<void> { await this.pressKey('Enter'); }
    async pressPageDown(): Promise<void> { await this.pressKey('PageDown'); }
    async pressPageUp(): Promise<void> { await this.pressKey('PageUp'); }
    async pressArrowRight(): Promise<void> { await this.pressKey('ArrowRight'); }
    async pressArrowUp(): Promise<void> { await this.pressKey('ArrowUp'); }
}
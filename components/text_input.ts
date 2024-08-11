import {BaseComponent} from '../framework/component'
import {Page} from "playwright";

export class TextInput extends BaseComponent {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    async enter_text(text: string): Promise<void> {
        await this.clear()
        await this.locator.fill(text);
    }

    async clear(): Promise<void> {
        await this.locator.fill('');
    }

    async get_text(): Promise<string> {
        return this.locator.inputValue();
    }
}

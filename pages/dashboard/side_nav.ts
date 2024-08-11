import { BasePage } from '../../framework/page';
import {BaseComponent} from "../../framework/component";
import {Page} from "playwright";

class SideNav extends BaseComponent {
        constructor(page: Page, selector: string) {
        super(page, selector);
    }
    private get pay_tab(): string { return '[data-component="left-nav"] [data-testid="left-layout-menu-Pay"]'; }

    async clickPayTab(): Promise<void> {
        await this.click(this.pay_tab);
    }
}
 export {SideNav}
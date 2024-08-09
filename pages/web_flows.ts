import { Page , BrowserContext} from 'playwright';
import { LoginPage } from './login/login_page';
import {ForgotYourPasswordPage} from "./login/forgot_your_password_page";
import { BrowserManager } from '../framework/browser';

class LoginFlows {
    public loginPage: LoginPage;
    public forgotYourPasswordPage: ForgotYourPasswordPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
        this.forgotYourPasswordPage = new ForgotYourPasswordPage(page);
    }
}

export { LoginFlows };


class WebFlows {
    public loginFlows: LoginFlows;
    private context: BrowserContext;
    private page: Page;

    private constructor(page: Page, context: BrowserContext) {
        this.loginFlows = new LoginFlows(page);
        this.page = page;
        this.context = context;
    }

    public static async create(): Promise<WebFlows> {
        const browserManager = await BrowserManager.getInstance();
        const { context, page } = await browserManager.createContextAndPage();
        return new WebFlows(page, context);
    }

    public async close() {
        await this.page.close(); // Close the page
        await this.context.close(); // Close the context
    }
}

export { WebFlows };
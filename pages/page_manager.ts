import { Page } from 'playwright';
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


class PageManager {
    public loginFlows: LoginFlows;
    private static browserManager: BrowserManager;
    private static page: Page;

    private constructor(page: Page) {
        this.loginFlows = new LoginFlows(page);
    }

    public static async create(): Promise<PageManager> {
        if (!PageManager.browserManager) {
            PageManager.browserManager = await BrowserManager.getInstance();
            PageManager.page = PageManager.browserManager.getPage();
        }
        return new PageManager(PageManager.page);
    }

    public static async close() {
        if (PageManager.browserManager) {
            await PageManager.browserManager.close();
            PageManager.browserManager = null;
            PageManager.page = null;
        }
    }
}

export { PageManager };

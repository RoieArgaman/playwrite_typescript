import { Page , BrowserContext} from 'playwright';
import { LoginPage } from './login/login_page';
import {ForgotYourPasswordPage} from "./login/forgot_your_password_page";
import {RegisterCodeVerificationPage} from "./wizard/register_code_verification_page";
import { BrowserManager } from '../framework/browser';
import {RegisterPage} from "./wizard/register_page";
import {SideNav} from "./dashboard/side_nav";
import {PayPage} from "./dashboard/pay_page";

class LoginFlows {
    public loginPage: LoginPage;
    public forgotYourPasswordPage: ForgotYourPasswordPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
        this.forgotYourPasswordPage = new ForgotYourPasswordPage(page);
    }
}
class WizardFlows {
    public registerPage: RegisterPage;
    public registerCodeVerificationPage: RegisterCodeVerificationPage;

    constructor(page: Page) {
        this.registerPage = new RegisterPage(page);
        this.registerCodeVerificationPage = new RegisterCodeVerificationPage(page);
    }
}
class DashboardFlows {
    public sideNav: SideNav;
    public payPage: PayPage

    constructor(page: Page) {
        this.sideNav = new SideNav(page);
        this.payPage = new PayPage(page);
    }
}
class WebFlows {
    public loginFlows: LoginFlows;
    public wizardFlows: WizardFlows;
    public dashboardFlows: DashboardFlows;
    private context: BrowserContext;
    private page: Page;

    private constructor(page: Page, context: BrowserContext) {
        this.loginFlows = new LoginFlows(page);
        this.wizardFlows = new WizardFlows(page);
        this.dashboardFlows = new DashboardFlows(page);
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
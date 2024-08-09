import { BrowserManager } from '../framework/browser';
import { WebFlows } from '../pages/web_flows';
import { test as base } from '@playwright/test';

const testSetup = base.extend<{
    webFlows: WebFlows;
}>({
    webFlows: async ({}, use) => {
        // Initialize webFlows
        const webFlows = await WebFlows.create();

        // Provide webFlows to the test
        await use(webFlows);

        // Cleanup after the test
        await webFlows.close();
    },
});

export { testSetup };

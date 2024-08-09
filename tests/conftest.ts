import { BrowserManager } from '../framework/browser';
import { PageManager } from '../pages/page_manager';
import { test as base } from '@playwright/test';

const testSetup = base.extend<{
    pageManager: PageManager;
}>({
    pageManager: async ({}, use) => {
        // Initialize PageManager
        const pageManager = await PageManager.create();

        // Provide PageManager to the test
        await use(pageManager);

        // Cleanup after the test
        await PageManager.close();
    },
});

export { testSetup };

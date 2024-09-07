import { WebFlows } from '../pages/webFlows';
import { test as base , expect as expectBase} from '@playwright/test';
let projectName: string

const test = base.extend<{
    webFlows: WebFlows;
}>({
    webFlows: async ({}, use) => {
        // Initialize webFlows
        const webFlows = await WebFlows.create(projectName);

        // Provide webFlows to the test
        await use(webFlows);

        // Cleanup after the test
        await webFlows.close();
    },
});

export { test };

const expect = expectBase.extend({})
export {expect}

// Use beforeEach or beforeAll to access the project name
test.beforeEach(async ({}, testInfo) => {
    projectName = testInfo.project.name;
    console.log(`Running in project: ${projectName}`);
});
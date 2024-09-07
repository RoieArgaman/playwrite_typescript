import { WebFlows } from '../pages/webFlows';
import { test as base , expect as expectBase} from '@playwright/test';


const test = base.extend<{
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

export { test };

const expect = expectBase.extend({})
export {expect}

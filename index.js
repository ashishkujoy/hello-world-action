const core = require('@actions/core');
const github = require('@actions/github');

try {
    const whoToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${whoToGreet}`);
    const time = (new Date()).toTimeString();
    core.setOutput('time', time);
    const payload = JSON.stringify(github.context.payload, null, 2);
    console.log(`The event payload: ${payload}`);
} catch(e) {
    core.setFailed(e.message);
}
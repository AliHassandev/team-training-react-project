//import Raven from 'raven-js';

function init() {
    // Raven.config("https://785166b68030497aa97ee394a9484575@sentry.io/4014309", {
    //     release: "1.0.0",
    //     environment: "development-test"
    // }).install();
}

function log(error) {
    // Raven.captureException(error);
    console.error(error);
}

export default {
    init,
    log
}
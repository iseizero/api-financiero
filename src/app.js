const {
    app
} = require('./server');
const { logger } = require('./log');

async function run() {
    app.listen(4020, function(){
        logger.info("Server Start");
    });
}

run();
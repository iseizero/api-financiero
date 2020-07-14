const winston = require('winston');

const logConfig = {
    format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    transports: [
        new winston.transports.Console({
            level: 'debug'
        }),
        new winston.transports.File({
            level: 'error',
            filename: './logs/trace.log'
        })
    ]
};

const logger = winston.createLogger(logConfig);

module.exports = { logger };
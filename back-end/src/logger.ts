import winston, {LoggerOptions} from 'winston';
import rotatingFileTransport, {DailyRotateFileTransportOptions} from 'winston-daily-rotate-file';
import {ConsoleTransportOptions} from 'winston/lib/winston/transports';

import expressWinston  from 'express-winston';

const commonOptions = {
  utc: true
};

const dailyRotatingLogFileOptions: DailyRotateFileTransportOptions = {
  dirname: './logs',
  filename: '%DATE%.log',
  level: 'info',
  ...commonOptions
};

const consoleLogOptions: ConsoleTransportOptions = {
  level: 'error',
  ...commonOptions
};

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss.SSSS'}),
    winston.format.json(),
  ),
  transports: [
    new rotatingFileTransport(dailyRotatingLogFileOptions),
    new winston.transports.Console(consoleLogOptions),
  ]
});

const requestLoggerOptions: LoggerOptions = {
  defaultMeta: {
    label: 'request'
  }
};

export const requestLogger = logger.child(requestLoggerOptions);

export default logger;

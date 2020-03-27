import winston from 'winston';
import rotatingFileTransport, {DailyRotateFileTransportOptions} from 'winston-daily-rotate-file';
import {ConsoleTransportOptions, FileTransportOptions} from 'winston/lib/winston/transports';

const dailyRotatingLogFileOptions: DailyRotateFileTransportOptions = {
  dirname: './logs',
  filename: '%DATE%.log',
  level: 'info',
};

const consoleLogOptions: ConsoleTransportOptions = {
  level: 'error',
};

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss.SSSS'}),
    winston.format.json()
  ),
  transports: [
    new rotatingFileTransport(dailyRotatingLogFileOptions),
    new winston.transports.Console(consoleLogOptions),
  ]
});

export default logger;

import {LoggerOptions} from 'winston';
import logger from './root-logger';

const requestLoggerOptions: LoggerOptions = {
  defaultMeta: {
    source: 'request'
  }
};

const requestLogger = logger.child(requestLoggerOptions);

export default requestLogger;

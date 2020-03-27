import {Logger, QueryRunner} from 'typeorm';
import logger from './root-logger';
import {LoggerOptions} from 'winston';

const loggerOptions: LoggerOptions = {
  defaultMeta: {
    source: 'typeorm'
  }
};

const ormLogger = logger.child(loggerOptions);

export class TypeOrmCustomLogger implements Logger {
  log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner): any {
    switch (level) {
      case 'info':
        ormLogger.info(message);
        break;
      case 'warn':
        ormLogger.warn(message);
        break;
      case 'log':
        ormLogger.verbose(message);
        break;
      default:
        throw new Error(`Unknown log level: ${level}`);
    }
  }

  logMigration(message: string, queryRunner?: QueryRunner): any {
    ormLogger.info(message);
  }

  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner): any {
    ormLogger.info(query);
  }

  logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner): any {
    ormLogger.error(error);
  }

  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner): any {
    ormLogger.warn(`Slow query (${time}): ${query}`);
  }

  logSchemaBuild(message: string, queryRunner?: QueryRunner): any {
    ormLogger.info(message);
  }
}

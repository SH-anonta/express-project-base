import 'reflect-metadata';
import {Connection, ConnectionOptions, createConnection} from 'typeorm';
import {TypeOrmCustomLogger} from './logger/typeorm-custom-logger';
import logger from './logger/root-logger';

const connectionOptions: ConnectionOptions = {
  database: 'Driver',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',

  entities: [
    'src/entity/**/*.ts'
  ],

  logging: true,
  logger: new TypeOrmCustomLogger()
};

let connection$: Promise<Connection | void> | null = null;

export function getDbConnection(): Promise<Connection> {
  return connection$ || (connection$ = createConnection(connectionOptions).then(async connection => {
    await connection.synchronize();

    return connection as any;
  })).catch(err => {
    logger.error(err);
  });
}

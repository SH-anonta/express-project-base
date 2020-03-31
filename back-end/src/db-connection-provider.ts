import 'reflect-metadata';
import {Connection, ConnectionOptions, createConnection} from 'typeorm';
import {TypeOrmCustomLogger} from './logger/typeorm-custom-logger';
import logger from './logger/root-logger';

const connectionOptions: ConnectionOptions = {
  database: 'Driver',
  type: 'postgres',
  host: 'maindb',
  port: 5432,
  username: 'postgres',
  password: '123',

  entities: [
    'src/entity/**/*.ts'
  ],

  // TODO use migration run instead of synchronize
  synchronize: true,
  migrationsRun: false,
  migrationsTableName: '_migration',
  migrationsTransactionMode: 'all',
  migrations: [
    './src/migrations'
  ],

  logging: true,
  logger: new TypeOrmCustomLogger(),
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

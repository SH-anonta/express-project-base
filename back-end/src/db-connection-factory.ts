import 'reflect-metadata';
import {Connection, createConnection} from 'typeorm';

export function createDbConnection(): Promise<Connection | void> {
  return createConnection().then(async connection => {
    await connection.synchronize();

    return connection;
  }).catch(error => console.log(error));
}

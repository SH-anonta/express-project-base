import 'reflect-metadata';
import {Connection, createConnection} from 'typeorm';

let connection$: Promise<Connection | void> | null = null;

export function getDbConnection(): Promise<Connection> {
  return connection$ || (connection$ = createConnection().then(async connection => {
    await connection.synchronize();

    return connection as any;
  })).catch(error => console.error(error));
}

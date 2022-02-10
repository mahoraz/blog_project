import { createConnection, ConnectionOptions } from 'typeorm';
import path from 'path';
import config from '../config/config.json';

export async function openDatabaseConnection() {
  // await closeDatabaseConnection();

  const conn = await createConnection({
    type: "mysql",
    entities: [path.resolve(__dirname, '..', 'entities/*{.ts,.js}')],
    host: config.host,
    port: config.port,
    database: "blog",
    username: config.username,
    password: config.password,
    synchronize: true
  });

  if (!conn.isConnected) {
    throw new Error('Connection to database failed');
  }
  return conn;
}

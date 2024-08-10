import { DataSource } from 'typeorm';
import { Url } from '@/entities/link';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'homework',
  synchronize: true,
  schema: 'homework',
  entities: [Url],
});

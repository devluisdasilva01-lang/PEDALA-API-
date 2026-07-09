import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { DataSourceOptions } from 'typeorm';
import { DataSource } from 'typeorm';

const options: TypeOrmModuleOptions & DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: '102030',
  database: 'pedaladb',
  entities: [join(__dirname, '..', '**', '*.model{.ts,.js}')],
  migrations: [
    join(__dirname, '..', 'database', 'migrations', '*{.ts,.js}'),
  ],
  migrationsRun: true,
  synchronize: false,
};

export const typeOrmConfig = options;
export default new DataSource(typeOrmConfig);
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { DataSourceOptions } from 'typeorm';

const options: TypeOrmModuleOptions & DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: '102030',
  database: 'pedaladb',
  migrations: [
    join(__dirname, '..', 'database', 'migrations', '*{.ts,.js}'),
  ],
  migrationsRun: true,
  synchronize: false,
};

export const typeOrmConfig = options;
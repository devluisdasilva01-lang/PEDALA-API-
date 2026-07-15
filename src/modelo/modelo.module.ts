import { Module } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { ModeloController } from './modelo.controller';
import { ModeloModel } from './modelo.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcaModule } from 'src/marca/marca.module';

@Module({
  imports:[TypeOrmModule.forFeature([ModeloModel]), MarcaModule],
  providers: [ModeloService],
  controllers: [ModeloController]
})
export class ModeloModule {}

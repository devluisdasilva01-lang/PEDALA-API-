import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BicicletasController } from './bicicletas.controller';
import { BicicletasService } from './bicicletas.service';
import { BicicletaModel } from './bicicleta.model';
import { ModeloModule } from 'src/modelo/modelo.module';

@Module({
  imports:[TypeOrmModule.forFeature([BicicletaModel]), ModeloModule],
  controllers: [BicicletasController],
  providers: [BicicletasService]
})
export class BicicletasModule {}

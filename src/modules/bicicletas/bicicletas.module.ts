import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BicicletasController } from './bicicletas.controller';
import { BicicletasService } from './bicicletas.service';
import { BicicletaModel } from './bicicleta.model';
import { ModeloModule } from 'src/modules/modelo/modelo.module';
import { EstacoesModule } from 'src/modules/estacoes/estacoes.module';

@Module({
  imports:[TypeOrmModule.forFeature([BicicletaModel]), ModeloModule, EstacoesModule],
  controllers: [BicicletasController],
  providers: [BicicletasService]
})
export class BicicletasModule {}

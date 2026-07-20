import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BicicletaModel } from './bicicleta.model';
import { ModeloService } from 'src/modelo/modelo.service';
import { EstacoesService } from 'src/estacoes/estacoes.service';
import { BicicletaRequestDto } from './dto/bicicleta_request.dto';

@Injectable()
export class BicicletasService {

    constructor(
        @InjectRepository(BicicletaModel)
        private readonly bicicletaRepository: Repository<BicicletaModel>,
        private readonly modeloService: ModeloService,
        private readonly estacoesService: EstacoesService
    ){}

    async addBicicleta(data: BicicletaRequestDto): Promise<void> {
        const lotacao = this .estacoesService.buscarEstacaoPorId(data.estacaoId)
        const modelo = await this.modeloService.carregarModeloPeloId(data.modeloId)

        const bicicleta = this.bicicletaRepository.create({
            status: data.status,
            modelo: modelo,
            lotacao: lotacao,
            dataCadrastro: new Date()
        })
        await this.bicicletaRepository.save(bicicleta)
    }

    async carregarBicicletas(): Promise<BicicletaModel[]> {
        return await this.bicicletaRepository.find({})
    }
}

import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ModeloModel } from './modelo.model';
import { InjectRepository } from '@nestjs/typeorm';
import { ModeloRequestDto } from './dto/modelo_request.dto';
import { MarcaService } from 'src/marca/marca.service';
import { ModeloResponseDto } from './dto/modelo_reponse.dto';

@Injectable()
export class ModeloService {

    constructor(
        @InjectRepository(ModeloModel)
        private readonly modeloRepository: Repository<ModeloModel>,
        private readonly marcaService: MarcaService
    ){}

    async addModelo(request: ModeloRequestDto): Promise<void> {
        const marca = await this.marcaService.carregarMarcaPorId(request.marcaId)
        const existeModelo = await this.modeloRepository.findOneBy({
            nomeModelo: request.nome
        })
        if(existeModelo) throw new BadRequestException("Modelo já registrado")
        const modelo = this.modeloRepository.create({
            nomeModelo: request.nome,
            marca 
        })
        await this.modeloRepository.save(modelo)
    }

    async carregarModelos(): Promise<ModeloResponseDto[]> {
        const modelos = await this.modeloRepository.find({
            relations:{marca: true}
        })

        return modelos.map(mo => ({
            id: mo.id,
            modelo: mo.nomeModelo,
            marca: mo.marca.nomeMarca
        }))
    }
}

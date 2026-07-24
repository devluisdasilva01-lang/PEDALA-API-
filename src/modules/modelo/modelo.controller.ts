import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { ModeloModel } from './modelo.model';
import { ModeloRequestDto } from './dto/modelo_request.dto';
import { ModeloResponseDto } from './dto/modelo_reponse.dto';

@Controller('modelos')
export class ModeloController {

    constructor(
        private readonly modeloService: ModeloService 
    ){}

    @Post()
    async addModelo(@Body() request: ModeloRequestDto): Promise<void> {
        await this.modeloService.addModelo(request)
    }

    @Get()
    async carregarModelos(@Query("marca") marca:string): Promise<ModeloResponseDto[]> {
        let modelos 
        if(marca) {
            modelos = await this.modeloService.carregarModeloPelaMarca(marca)
        } else {
            modelos = await this.modeloService.carregarModelos()    
        }
        return modelos 
    }

}

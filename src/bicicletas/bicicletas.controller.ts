import { Body, Controller, Get, Post } from '@nestjs/common';
import { BicicletasService } from './bicicletas.service';
import { BicicletaRequestDto } from './dto/bicicleta_request.dto';
import { BicicletaResponseDto } from './dto/bicicleta_response.dto';

@Controller('bicicletas')
export class BicicletasController {
    constructor(
        private readonly bicicletaService: BicicletasService
    ){}

    @Post("")
    async criarBicicleta(@Body() data: BicicletaRequestDto): Promise<void> {
        await this.bicicletaService.addBicicleta(data)
    }

    @Get()
    async listarBicicletas(): Promise<BicicletaResponseDto[]> {
        return await this.bicicletaService.carregarBicicletas()
    }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { UsuarioResquestDto } from './dto/usuario_request.dto';
import { UsuarioEditarRequestDto } from './dto/usuario_editar_request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioModel } from './usuario.model';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(UsuarioModel)
        private readonly usuarioRepository: Repository<UsuarioModel>,
    ) {}

    async salvarUsuario(dto: UsuarioResquestDto) {
        const usuario = await this.usuarioRepository.findOne({
            where: {
            email: dto.email,
         },
        });

        if (usuario) {
            throw new BadRequestException(
                 `Usuário já Cadastrado com email ${dto.email}`,
            );
        }

        await this.usuarioRepository.save(dto);
    }

    listarUsuario() {
        return this.usuarioRepository.find();
    }

    buscarUsuariosPeloEmail(email: string) {
        return this.usuarioRepository.findOne({
             where: {
             email,
            },
        });
    }

    buscarUsuarioPeloId(id: string) {
        return this.usuarioRepository.findOneByOrFail({
        id,
        });
    }

    async editar(id:string, dto: UsuarioEditarRequestDto):Promise<void>{
        console.log('**** ', dto)
        const result = await this.usuarioRepository.update(id, dto)
    }
    
}

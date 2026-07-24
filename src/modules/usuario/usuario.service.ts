import { BadRequestException, Injectable } from '@nestjs/common';
import { UsuarioResquestDto } from './dto/usuario_request.dto';
import { UsuarioEditarRequestDto } from './dto/usuario_editar_request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioModel } from './usuario.model';
import bcrypt from 'bcrypt';
import { UsuarioPapel } from './papel.enum';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(UsuarioModel)
        private readonly usuarioRepository: Repository<UsuarioModel>,
    ) {}

    async salvarUsuario(dto: UsuarioResquestDto) {
        const existeusuario = await this.usuarioRepository.findOne({
            where: {
            email: dto.email,
         },
        });

        if (existeusuario) {
            throw new BadRequestException(
                 `Usuário já Cadastrado com email ${dto.email}`,
            );
        }

        const passwdHash = await bcrypt.hash(dto.senha, 12)

        const usuario = this.usuarioRepository.create({
            email: dto.email,
            senha: passwdHash,
            nome: dto.nome,
            perfil: dto.perfil ? dto.perfil : UsuarioPapel.CLIENTE
        }) 
        await this.usuarioRepository.save(usuario);
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

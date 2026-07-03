import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioResquestDto } from './usuario_request.dto';
import { UsuarioAtualizarRequestDto } from './usuario_atualizar_request.dto';

@Injectable()
export class UsuarioService {
    private usuarios:any = [
        {
            nome: "José Antônio",
            email: "jose@gmail.com",
            telefone: "(86) 9.9988-6633"
        },
        {
            nome: "Maria José",
            email: "maze@gmail.com",
            telefone: "(86) 9.9987-5544"
        }
    ] 
    listarUsuario(){
        return this.usuarios 
    }

    salvarUsuario(dto: UsuarioResquestDto){
        const usuario = this.usuarios.find(usuario => usuario.email === dto.email)
        if(usuario) throw new BadRequestException(`Usuário já Cadastrado com email ${dto.email}`)
        this.usuarios.push(dto)
    }

    buscarUsuariosPeloEmail(email:string){
        const usuario = this.usuarios.find(usuario => usuario.email === email)

        if(usuario === null || usuario === undefined){
            throw new NotFoundException("Usuário não encontrado!")
        }
        return usuario 
    }

    removerUsuario(email:string){
        const index = this.usuarios.findIndex(usuario => usuario.email === email)
        if(index === -1) throw new BadRequestException("Nenhum usuário com este email")
        this.usuarios.splice(index, 1)
    }

    atualizarUsuario(email:string, request:UsuarioAtualizarRequestDto){
       const index = this.usuarios.findIndex(usuario => usuario.email === email)
       
       if(index === -1) throw new BadRequestException("Nenhum usuário com este email")
       
        const usuario = this.usuarios[index]
        this.usuarios[index] = {
            ...usuario,
            nome: request.nome ? request.nome : usuario.nome,
            telefone: request.telefone ? request.telefone : usuario.telefone  
        }
    }
}

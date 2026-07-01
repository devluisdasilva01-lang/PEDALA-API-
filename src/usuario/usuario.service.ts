import { Injectable } from '@nestjs/common';

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

    buscarUsuariosPeloEmail(email:string){
        const usuario = this.usuarios.find(usuario => usuario.email === email)
        return usuario 
    }
}

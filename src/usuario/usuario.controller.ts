import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService){}

  @Get()
  todosUsuarios(){
    return this.usuarioService.listarUsuario()
  }

  // http://localhost:3000/usuarios/buscar/maze@gmail.com
  @Get("/buscar/:email")
  buscarPeloEmail(@Param("email") email:string){
    return this.usuarioService.buscarUsuariosPeloEmail(email)
  }

  // http://localhost:3000/usuarios/buscar?email=maze@gmail.com
  @Get("/buscar")
  buscarUserPeloEmail(@Query("email") email:string){
    return this.usuarioService.buscarUsuariosPeloEmail(email)
  }
}


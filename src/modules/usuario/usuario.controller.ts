import { Controller, Get, Param, Query, Post, Body, HttpCode, Put} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioResquestDto } from './dto/usuario_request.dto';
import { UsuarioEditarRequestDto } from './dto/usuario_editar_request.dto';

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

  @Post()
  addUsuario(@Body() request:UsuarioResquestDto){
    this.usuarioService.salvarUsuario(request)
  }

  @Put("/editar/:id")
  @HttpCode(204)
  async editarUsuario(@Param("id") id:string, 
  @Body() request: UsuarioEditarRequestDto):Promise<void> {
    await this.usuarioService.editar(id, request)
  } 
}


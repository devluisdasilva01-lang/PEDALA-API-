import { Controller, Get, Param, Query, Post, Body, Delete, HttpCode, Put} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioResquestDto } from './usuario_request.dto';
import { UsuarioAtualizarRequestDto } from './usuario_atualizar_request.dto';

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

  @Delete("/deletar")
  @HttpCode(204 )
  deletarUsuario(@Query("email") email:string){
    this.usuarioService.removerUsuario(email) 
  }

  @Put("/atualizar/:email")
  atualizarUsuario(@Param("email") email:string, @Body() request: UsuarioAtualizarRequestDto){
    this.usuarioService.atualizarUsuario(email, request)
  }
}


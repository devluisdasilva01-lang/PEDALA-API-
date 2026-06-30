import { Controller, Get } from '@nestjs/common';

@Controller('usuarios')
export class UsuarioController {

  @Get() 
  carregarUsuarios(){
    return {
      nome:"Luis Mesquita",
      email:"lumesquita@gmail.com",
      telefone:"(86 9.8577.2244)"
    }
  }
}

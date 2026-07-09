import { IsOptional, IsPhoneNumber, MinLength } from "class-validator"

export class UsuarioEditarRequestDto {
    @IsOptional()
    @MinLength(6)    
    nome: string

    @IsOptional()
    @IsPhoneNumber('BR')
    telefone: string
}
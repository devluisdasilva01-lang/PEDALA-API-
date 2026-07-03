import { IsOptional, IsPhoneNumber, MinLength } from "class-validator"

export class UsuarioAtualizarRequestDto {
    @IsOptional()
    @MinLength(6)    
    nome: string

    @IsOptional()
    @IsPhoneNumber()
    telefone: string
}
import { IsEmail, IsString, IsPhoneNumber, MinLength, IsNotEmpty } from "class-validator"

export class UsuarioResquestDto {
    
    @MinLength(6)
    @IsNotEmpty() 
    nome: string

    @IsEmail()
    @IsNotEmpty()
    email: string 

    @IsPhoneNumber()
    @IsNotEmpty() 
    telefone: string 
}
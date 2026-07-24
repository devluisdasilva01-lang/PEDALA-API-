import { IsEmail, IsString, IsPhoneNumber, MinLength, IsNotEmpty, ValidationArguments, IsEmpty, IsOptional, IsEnum } from "class-validator"
import { UsuarioPapel } from "../papel.enum"

export class UsuarioResquestDto {
    
    @MinLength(6, {
        message: (args: ValidationArguments) => `O campo '${args.property}' 
        deve conter no mínimo ${args.constraints[0]} caracteres.`
    })
    @IsNotEmpty({message: "Campo NOME é obrigatório"}) 
    nome: string

    @IsEmail()
    @IsNotEmpty({message: "Campo EMAIL é obrigatório"})
    email: string 


    @IsNotEmpty({message: "Campor SENHA é obrigatória"})
    @MinLength(6 , {
        message: (args: ValidationArguments) => `O campo '${args.property}' 
        deve conter no mínimo ${args.constraints[0]} caracteres.`
    })
    senha:string

    @IsOptional()
    @IsEnum(UsuarioPapel)
    perfil: UsuarioPapel

    @IsPhoneNumber("BR")
    @IsNotEmpty() 
    telefone: string 
}
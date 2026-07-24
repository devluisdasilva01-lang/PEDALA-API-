import {IsInt, IsNotEmpty, IsOptional, MinLength, ValidationArguments} from 'class-validator';

export class EstacaoRequestDto {
    @IsNotEmpty()
    @MinLength(6,{
        message: (args: ValidationArguments) => 
            `O campo ${args.property} deve ter no mínimo ${args.constraints[0]} caracteres`
    })
    nome: string;

    @IsNotEmpty({message: 'O campo capacidade é obrigatório'})
    @IsInt()
    capacidade: number;

    @IsOptional()
    ativa: boolean;
}
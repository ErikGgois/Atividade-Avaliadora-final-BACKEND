import { from } from "rxjs";
import {IsInt, IsNotEmpty, IsString, MinLength,IsOptional } from "class-validator";

export class alteraUsuarioDTO{
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    sinopse:string;

    @IsString()
    @IsOptional()
    id: string;

    @IsString()
    @IsOptional({message: "o nome Não pode ser vazio"})
    nome: string;


    @IsInt()
    @IsOptional()
    duracao: Number;


    @IsString()
    @IsOptional()
    ano: string;

    @IsString()
    @IsOptional()
    genero: string;
}

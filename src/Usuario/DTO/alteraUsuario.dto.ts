import { from } from "rxjs";
import { IsNome, IsInt, IsNotEmpty, IsString, MinLength,IsOptional } from "class-validator";
import { nomeUnico } from "../validacao1/nome-unico.validator";

export class alteraUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "sinopse Não pode ser vazio"})
    @IsOptional()
    sinopse:string;

    @IsString()
    @IsOptional()
    id: string;

    @IsInt()
    @IsOptional()
    duracao: Number;

    @IsNome(undefined,{message:"nome invalida"})    
    @nomeUnico({message:"nome ja informada"})
    @IsOptional()
    nome: string;

    @IsString()
    @IsOptional()
    ano: string;

    @MinLength(6,{message: "Genero precisa ser informado"})
    @IsOptional()
    genero: string; 
}
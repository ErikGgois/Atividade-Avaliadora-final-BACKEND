import {IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";


export class criaUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    id:string;

    @IsString()
    nome: string;
    
    @IsInt()
    duracao: Number;

    @IsString()
    Id: string;

    @MinLength(6,{message: "filme precisa existir"})
    senha: string; 
    Nome: Number;
    sinopse: string;
    ano: string;
    genero: any;
}
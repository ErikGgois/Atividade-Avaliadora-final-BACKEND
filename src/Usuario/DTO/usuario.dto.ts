import { IsNome, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";
import { nomeUnico } from "../validacao1/nome-unico.validator";

export class criaUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    id:string;

    @IsString()
    nome: string;
    
    @IsInt()
    duracao: Number;



    @IsNome(undefined,{message:"Filme inválido"})    
    @nomeUnico({message:"Filme já cadastrado"})
    Nome: string;

    @IsString()
    Id: string;

    @MinLength(6,{message: "filme precisa existir"})
    senha: string; 
}
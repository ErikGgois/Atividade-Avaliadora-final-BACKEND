export class UsuarioEntity{
    id: string;
    nome: string;
    duracao: Number;
    sinopse: string;
    ano: string;
    genero: string;

    constructor(id: string,nome: string,idade: Number,cidade: string,email: string,telefone: string,senha: string){
        this.id = id;
        this.nome = nome;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.ano = ano;
        this.genero = genero;
    
    }
}
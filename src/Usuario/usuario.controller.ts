import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuariosArmazenados } from "./usuario.dm";
import { UsuarioEntity } from "./usuario.entity";
import { criaUsuarioDTO } from "../Usuario/DTO/usuario.dto";

import {v4 as uuid} from 'uuid';
import { ListaUsuarioDTO } from "../Usuario/DTO/consulta.dto";
import { alteraUsuarioDTO } from "../Usuario/DTO/alteraUsuario.dto";


@Controller('/usuarios')
export class UsuarioController{
    constructor(private clsUsuariosArmazenados: UsuariosArmazenados){
        
    }    
    @Post()
    async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO){
        
         
        var novoUsuario = new UsuarioEntity(uuid(),dadosUsuario.id,
                                            dadosUsuario.Nome,dadosUsuario.genero,dadosUsuario.sinopse,
                                            dadosUsuario.ano);
        this.clsUsuariosArmazenados.AdicionarUsuario(novoUsuario);

        var usuario = {
            dadosUsuario : novoUsuario,
            status: "Filme Criado"
        }
        return usuario;
    }

    @Get()
    async listaUsuarios(){
        

        const usuariosListados = this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.sinopse,
                usuario.sinopse,
            )
        );
        
        return listaRetorno;
    }
    
    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: alteraUsuarioDTO){
        const usuarioAtualizado = await this.clsUsuariosArmazenados.atualizaUsuario(id, novosDados);
        return {
            usuario: usuarioAtualizado,
            message: "Filme Atualizado"
    }
}

@Delete('/:id')
async removeUsuario(@Param('id') id: string){
    const usuarioRemovido = await this.clsUsuariosArmazenados.removeUsuario(id);
    return {
        usuario: usuarioRemovido,
        message: "Filme Removido"
    }
}

}
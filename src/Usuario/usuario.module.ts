import { Module } from "@nestjs/common";
import { UsuarioController } from "../Usuario/usuario.controller";
import { UsuariosArmazenados } from "../Usuario/usuario.dm";
import { nomeUnicoValidator } from "../Usuario/validacao1/nome-unico.validator";

@Module({
    imports:[],
    controllers:[UsuarioController],
    providers:[UsuariosArmazenados,nomeUnicoValidator]
})
export class UsuarioModule{}
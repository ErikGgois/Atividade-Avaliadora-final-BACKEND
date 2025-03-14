import { Module } from "@nestjs/common";
import { UsuarioController } from "../Usuario/usuario.controller";
import { UsuariosArmazenados } from "../Usuario/usuario.dm";


@Module({
    imports:[],
    controllers:[UsuarioController],
})
export class UsuarioModule{}
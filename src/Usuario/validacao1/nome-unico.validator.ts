import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuariosArmazenados } from "../usuario.dm";
import { Injectable } from "@nestjs/common";


@Injectable()
@ValidatorConstraint({async:true})
export class nomeUnicoValidator implements ValidatorConstraintInterface{
    constructor(private clsUsuariosArmazenados:UsuariosArmazenados){}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const validarNome = await this.clsUsuariosArmazenados.validaNome(value);
        return !validarNome;
    }
    
}


export const nomeUnico = (opcaoValidacao: ValidationOptions)=>{
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcaoValidacao,
            constraints: [],
            validator: nomeUnicoValidator,
        })
    }
}
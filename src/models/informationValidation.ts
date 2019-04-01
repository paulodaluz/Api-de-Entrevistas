import { Request } from "express";
import { } from "express-validator";


export class validacao {

    validForm(request: Request) {
        //Validação de dados
        request.assert("nome", "Nome do cliente é obrigatório.").notEmpty();
        request.assert("");
        request.assert("").notEmpty();
        request.assert("").notEmpty();
        request.assert("").notEmpty();
       


        var erros = request.validationErrors();

        //Se tiver erros vai retorna-los
        if (erros) {
            return erros;
        }

        //Se não tiver nenhum erro não vai retornar nada
        return null;
    }

    validUser(request: Request) {
        //Validação de dados
        request.assert("user", "Nome do cliente é obrigatório.").notEmpty();
        request.assert("");
        request.assert("").notEmpty();
        request.assert("").notEmpty();
        request.assert("").notEmpty();



        var erros = request.validationErrors();

        //Se tiver erros vai retorna-los
        if (erros) {
            return erros;
        }

        //Se não tiver nenhum erro não vai retornar nada
        return null;
    }


}
import { Request } from "express";
import { } from "express-validator";


export class validacao {

    validUser(request: Request) {

        //Data Validation
        request.assert("userName", "User Name is required.").notEmpty();
        request.assert("password", "Password is required.");
        request.assert("write", "Writen function is required and need to be answered with ´´true´´ or ´´false´´").notEmpty();
        request.assert("read", "Read function is required and need to be answered with ´´true´´ or ´´false´´").notEmpty();
    
        var error = request.validationErrors();
    
        //If have error, return error
        if (error) {
            return error;
            console.log("Errors were found.")
        }
    
        //If dont have any error, return null
        return null;
        console.log("No error found.")
    }


    MessagePrefix = "O campo"; 
    MessageSufix = "deve ser preenchido.";

    validForm(request: Request) {

        //Data Validation
        request.assert("entrevistador", `${this.MessagePrefix} Entrevistador ${this.MessageSufix}`).notEmpty();
        request.assert("candidato", `${this.MessagePrefix} Candidato ${this.MessageSufix}`).notEmpty();
        request.assert("statusAvaliacao", `${this.MessagePrefix} Status da Validação ${this.MessageSufix}`).notEmpty();
        request.assert("disponibilidade", `${this.MessagePrefix} Disponibilidade ${this.MessageSufix}`).notEmpty();
        request.assert("pretensao", `${this.MessagePrefix} Pretensao ${this.MessageSufix}`).notEmpty();
        request.assert("dataEntrevista", `${this.MessagePrefix} Data de Entrevista ${this.MessageSufix}`).notEmpty();
        request.assert("conhecimentoVaga", `${this.MessagePrefix} Conhecimentos para a Vaga ${this.MessageSufix}`).notEmpty();
        request.assert("conhecidos", `${this.MessagePrefix} Conhecidos ${this.MessageSufix}`).notEmpty();
        request.assert("idade", `${this.MessagePrefix} Idade ${this.MessageSufix}`).notEmpty();
        request.assert("cidade", `${this.MessagePrefix} Cidade ${this.MessageSufix}`).notEmpty();
        request.assert("mudancaCidade", `${this.MessagePrefix} Mudança de Cidade ${this.MessageSufix}`).notEmpty();
        request.assert("escolaridade", `${this.MessagePrefix} Escolaridade ${this.MessageSufix}`).notEmpty();
        request.assert("instituicoes", `${this.MessagePrefix} Instituições ${this.MessageSufix}`).notEmpty();
        request.assert("nivelIngles", `${this.MessagePrefix} Nivel de Inglês ${this.MessageSufix}`).notEmpty();
        request.assert("empregoAtual", `${this.MessagePrefix} Emprego Atual ${this.MessageSufix}`).notEmpty();
        request.assert("setorPretendido", `${this.MessagePrefix} Setor Pretendido ${this.MessageSufix}`).notEmpty();
        request.assert("setorEnquadrado", `${this.MessagePrefix} Setor Enquandrado ${this.MessageSufix}`).notEmpty();
        request.assert("java", `${this.MessagePrefix} Java ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("jee", `${this.MessagePrefix} Jee ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("python", `${this.MessagePrefix} Python ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("ruby", `${this.MessagePrefix} Ruby ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("javascript", `${this.MessagePrefix} javaScript ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("sql", `${this.MessagePrefix} sql ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("plsql", `${this.MessagePrefix} psqls ${this.MessageSufix}`).notEmpty().isNumeric();


        var error = request.validationErrors();

        //If have errors, return errors to user
        if (error) {
            return error;
            console.log("Errors were found.")
        }

        //If dont have any error, return null
        return null;
        console.log("No error found.")
    }

}
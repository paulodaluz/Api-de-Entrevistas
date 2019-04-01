import { Request } from "express";
import { } from "express-validator";


export class validation {

    validUser(request: Request) {

        //Data Validation
        request.assert("userName", "User Name is required.").notEmpty();
        request.assert("password", "Password is required.").notEmpty();
        request.assert("write", "Writen function is required and need to be answered with ´´true´´ or ´´false´´").notEmpty();
        request.assert("read", "Read function is required and need to be answered with ´´true´´ or ´´false´´").notEmpty();
    
        //Checks if you have an error and if you have them in the error variable
        var error = request.validationErrors();
    
        //If have error, return error
        if (error) {

            return error;

        }
    
        //If dont have any error, return null
        return null;

    }

    MessagePrefix = "O campo"; 
    MessageSufix = "deve ser preenchido.";

    validForm(request: Request) {

        //Data Validation
        request.assert("candidato", `${this.MessagePrefix} candidato ${this.MessageSufix}`).notEmpty();
        request.assert("statusAvaliacao", `${this.MessagePrefix} status da validação ${this.MessageSufix}`).notEmpty();
        request.assert("disponibilidade", `${this.MessagePrefix} disponibilidade ${this.MessageSufix}`).notEmpty();
        request.assert("pretensao", `${this.MessagePrefix} pretensao ${this.MessageSufix}`).notEmpty();
        request.assert("dataEntrevista", `${this.MessagePrefix} data de entrevista ${this.MessageSufix}`).notEmpty();
        request.assert("conhecimentoVaga", `${this.MessagePrefix} conhecimentos para a vaga ${this.MessageSufix}`).notEmpty();
        request.assert("conhecidos", `${this.MessagePrefix} conhecidos ${this.MessageSufix}`).notEmpty();
        request.assert("idade", `${this.MessagePrefix} idade ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("cidade", `${this.MessagePrefix} cidade ${this.MessageSufix}`).notEmpty();
        request.assert("mudancaCidade", `${this.MessagePrefix} mudança de cidade ${this.MessageSufix}`).notEmpty();
        request.assert("escolaridade", `${this.MessagePrefix} escolaridade ${this.MessageSufix}`).notEmpty();
        request.assert("instituicoes", `${this.MessagePrefix} instituições ${this.MessageSufix}`).notEmpty();
        request.assert("nivelIngles", `${this.MessagePrefix} nivel de Inglês ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("empregoAtual", `${this.MessagePrefix} emprego Atual ${this.MessageSufix}`).notEmpty();
        request.assert("setorPretendido", `${this.MessagePrefix} setor Pretendido ${this.MessageSufix}`).notEmpty();
        request.assert("setorEnquadrado", `${this.MessagePrefix} setor Enquandrado ${this.MessageSufix}`).notEmpty();
        request.assert("java", `${this.MessagePrefix} java ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("jee", `${this.MessagePrefix} jee ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("python", `${this.MessagePrefix} python ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("ruby", `${this.MessagePrefix} ruby ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("javascript", `${this.MessagePrefix} javaScript ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("sql", `${this.MessagePrefix} sql ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("plsql", `${this.MessagePrefix} psqls ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("htmlCSS", `${this.MessagePrefix} html/CSS ${this.MessageSufix}`).notEmpty().isNumeric();
        request.assert("tecnologiasAdd", `${this.MessagePrefix} tecnologias adicionais ${this.MessageSufix}`).notEmpty();
        request.assert("resumo", `${this.MessagePrefix} resumo ${this.MessageSufix}`).notEmpty();
        request.assert("contratarPros", `${this.MessagePrefix} prós para contratar ${this.MessageSufix}`).notEmpty();
        request.assert("contratarContras", `${this.MessagePrefix} contras para contratar ${this.MessageSufix}`).notEmpty();
        request.assert("observacoes", `${this.MessagePrefix} observações ${this.MessageSufix}`).notEmpty();

        //Checks if you have an error and if you have them in the error variable
        var error = request.validationErrors();

        //If have errors, return errors to user
        if (error) {

            return error;
            
        }

        //If dont have any error, return null
        return null;

    }

}
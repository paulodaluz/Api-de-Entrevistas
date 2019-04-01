import {Request, Response} from "express";

import { Error } from '../models/Errors'
import { getManager } from "typeorm";
import { Interview } from "../entity/Interview";
import { InterviewDeleted } from "../entity/InterviewDeleted"


var err = new Error();

export async function newInterview (request: Request, response: Response) {
    const interviewRepository = getManager().getRepository(Interview);

    
    const newInterview = await interviewRepository.create(request.body)



    await interviewRepository.save(newInterview)
    response.status(201).send(newInterview)

}

export async function deleteInterview(request: Request, response: Response) {
    //Cria uma conexão com o banco
    const interviewRepository = getManager().getRepository(Interview);

    //Acha o cliente no banco de dados e guarda na variavel dados cliente
    const dataInterview = await interviewRepository.findOne(request.params.id);

    //Se o cliente não for encontrado irá retornar o erro padrão ao usuário
    if (!dataInterview) {
        response.status(404).json("")
        response.send();
        return;
    }
    //Deleta o cliente e retorna uma mensagem de sucesso ao usuário
    await interviewRepository.delete({ id: request.params.id });

    const interviewDeletedRepository = getManager().getRepository(InterviewDeleted);
    
    var deletedInterview = await interviewDeletedRepository.create(dataInterview);

    deletedInterview.usuarioExcluidor = request.body.entrevistador;

    await interviewDeletedRepository.save(deletedInterview);

    response.send("Entrevista excluída com sucesso");
    console.log("Changed table interview successfully!");
}

export async function searchAllInterview(request: Request, response: Response) {
    const interviewRepository = getManager().getRepository(Interview);
    const interviews = await interviewRepository.find({relations:["entrevistador"]});

    if (!interviews.length) {
        response.status(400).json({msg: "Nenhuma entrevista cadastrada"});
        response.end();
        return;
    }
    response.send(interviews);
}

export async function searchUserInterviews(request: Request, response: Response) {
//Olhar aprenas de um determiando usuário
    response.send("ok")
}


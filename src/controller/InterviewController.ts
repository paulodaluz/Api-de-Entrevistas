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
    //Create a conection with database
    const interviewRepository = getManager().getRepository(Interview);

    //Find the interview in the database and save it in the variable dataInterview
    const dataInterview = await interviewRepository.findOne(request.params.id);

    //If the interview is not found it will return the default error to the user
    if (!dataInterview) {
        response.status(404).json("")
        response.send();
        return;
    }

    //Deletes the interview
    await interviewRepository.delete({ id: request.params.id });

    //returns a success message to the user
    response.send("Entrevista excluída com sucesso");

    const interviewDeletedRepository = getManager().getRepository(InterviewDeleted);
    
    var deletedInterview = await interviewDeletedRepository.create(dataInterview);

    deletedInterview.usuarioExcluidor = request.body.entrevistador;

    await interviewDeletedRepository.save(deletedInterview);

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


import {Request, Response} from "express";

import { Error } from '../models/Errors'
import { getManager } from "typeorm";
import { Interview } from "../entity/Interview";
var err = new Error();

export async function newInterview (request: Request, response: Response) {
    response.send("ok")
}

export async function deleteInterview(request: Request, response: Response) {
    response.send("ok")
}

export async function searchAllInterview(request: Request, response: Response) {
    const interviewRepository = getManager().getRepository(Interview);
    const interviews = await interviewRepository.find({relations:["user"]});

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

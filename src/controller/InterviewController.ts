import {Request, Response} from "express";

import { Error } from '../models/Errors'
var err = new Error();

export async function newInterview (request: Request, response: Response) {
    response.send("ok")
}

export async function deleteInterview(request: Request, response: Response) {
    response.send("ok")
}

export async function searchInterview(request: Request, response: Response) {
    response.send("ok")
}

export async function searchUserInterviews(request: Request, response: Response) {
//Olhar aprenas de um determiando usuário
    response.send("ok")
}

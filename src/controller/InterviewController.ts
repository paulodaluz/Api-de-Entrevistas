import {Request, Response} from "express";

import { Error } from '../models/Errors'
var err = new Error();

export async function Teste(request: Request, response: Response) {
    response.send("ok")
}
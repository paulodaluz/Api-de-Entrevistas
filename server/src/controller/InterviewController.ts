import {Request, Response} from "express";
import {  } from "express-validator";
import { Error } from '../models/Errors'
import { getManager } from "typeorm";
import { Interview } from "../entity/Interview";
import { InterviewDeleted } from "../entity/InterviewDeleted";
import { validation } from "../models/informationValidation";


export async function newInterview (request: Request, response: Response) {
    
    //Create a conection with database
    const interviewRepository = getManager().getRepository(Interview);

    //It takes the validation function and the errors that it returns and saves in the variable errors
    var errors = new validation().validForm(request);

    //If you have errors it returns them to the user
    if (errors) {
        response.status(400).json(errors);
        return;
    };

    //Creating a new interview
    const newInterview = await interviewRepository.create(request.body)

    //If the interview is not found it will return the default error to the user
    if (!newInterview) {
        response.status(404).json(new Error().model(404, "Erro na requisição, verifique os dados e tente novamente"));
        return;
    }

    //Save a new interview in the database
    await interviewRepository.save(newInterview)

    //Shows the user the created interview
    response.status(201).send(newInterview)

}

export async function editInterview(request: Request, response: Response) {

    //Create a conection with database
    const interviewRepository = getManager().getRepository(Interview);

    //It takes the validation function and the errors that it returns and saves in the variable errors
    var errors = new validation().validForm(request);

    //If you have errors it returns them to the user
    if (errors) {
        response.status(400).json(errors);
        return;
    };

    //Creating a new interview
    const newInterview = await interviewRepository.create(request.body);

    //Find the interview is guard her in a variable
    const interview = await interviewRepository.findOne(request.params.id);

    //update the interview
    await interviewRepository.update({ id: request.params.id }, request.body);

    //If the interview is not found it will return the default error to the user
    if (!interview) {
        response.status(404).json(new Error().model(404, "Erro na requisição, verifique os dados e tente novamente"));
        return;
    }

    //return interview updated to user
    response.send(newInterview);
}

export async function deleteInterview(request: Request, response: Response) {

    //Create a conection with database
    const interviewRepository = getManager().getRepository(Interview);

    //Find the interview in the database and save it in the variable dataInterview
    const dataInterview = await interviewRepository.findOne(request.params.id,{relations:["entrevistador"]});

    //If the interview is not found it will return the default error to the user
    if (!dataInterview) {
        response.status(404).json(new Error().model(404, "Erro na requisição, verifique os dados e tente novamente"));
        return;
    }

    //Deleting the interview
    await interviewRepository.delete({ id: request.params.id });

    //returns a success message to the user
    response.send("Entrevista excluída com sucesso");

    //Create a conection with database
    const interviewDeletedRepository = getManager().getRepository(InterviewDeleted);
    
    //Get the previously deleted interview
    var deletedInterview = await interviewDeletedRepository.create(dataInterview);

    //Get the interviewer name and save it to the database
    deletedInterview.usuarioExcluidor = request.body.entrevistador;

    //Save the deleted interview in a table of deleted interviews
    await interviewDeletedRepository.save(deletedInterview);
    
}

export async function searchAllInterview(request: Request, response: Response) {

    console.log("Buscando entrevistas")

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
    
    var user = request.params.id 
    const interviewRepository = getManager().getRepository(Interview);
    var interviews;
    
    if(user){
        interviews = await interviewRepository.find({ where: {entrevistador : user}, relations:["entrevistador"]});
    }else{
        interviews = await interviewRepository.find({ where: {entrevistador : request.body.entrevistador}, relations:["entrevistador"]});
    }
    
    response.status(200).json(interviews)
}

export async function allInterviewsDeleted(request: Request, response: Response) {

    console.log("Buscando entrevistas")

    const interviewDeletedRepository = getManager().getRepository(InterviewDeleted);
    const interviews = await interviewDeletedRepository.find({ relations: ["entrevistador"] });

    if (!interviews.length) {
        response.status(400).json({ msg: "Nenhuma entrevista deletada" });
        response.end();
        return;
    }
    response.send(interviews);
}
import {Request, Response} from "express";
import {getManager} from "typeorm";
import { User } from '../entity/User';
const bcrypt = require('bcrypt');
import { Error } from '../models/Errors';
import { validation } from "../models/informationValidation";
var err = new Error();

export async function SaveUser(request: Request, response: Response) {

    const userRepository = getManager().getRepository(User);

    //It takes the validation function and the errors that it returns and saves in the variable errors
    var errors = new validation().validUser(request);

    //If you have errors it returns them to the user
    if (errors) {
        response.status(400).json(errors);
        return;
    };

    if(await userRepository.findOne({where: {username: request.body.username}})){
        return response.status(400).json(err.model(400, "Usuário já está em uso"))
    }
    
    var hash = await bcrypt.hash(request.body.password,10);

    var newUser = new User()
    newUser.username = request.body.username
    newUser.password = hash
    newUser.write = request.body.write
    newUser.fullname = request.body.fullname
    if(request.body.write){
        newUser.read = true
    }else{
        newUser.read = request.body.read
    }

    if (!newUser) {
        response.status(400).json({err: 'Usuário inválido'});
        response.end();
        return;
    }
    await userRepository.save(newUser);
    response.status(201).send(newUser);
}

export async function FindUser(username){

    const userRepository = getManager().getRepository(User);
    const user = await userRepository.findOne({where: {username:username}});

    return user;
}
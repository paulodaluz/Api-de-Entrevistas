import {Request, Response} from "express";
import {getManager} from "typeorm";
import { User } from '../entity/User'
const bcrypt = require('bcrypt')
import { Error } from '../models/Errors'
var err = new Error();

export async function SaveUser(request: Request, response: Response) {

    
    const userRepository = getManager().getRepository(User);
    
    if(await userRepository.findOne({where: {username: request.body.username}})){
        return response.status(400).json(err.model(400, "User already in use"))
    }
    
    var hash = await bcrypt.hash(request.body.password,10);

    var newUser = new User()
    newUser.userName = request.body.username
    newUser.password = hash
    newUser.write = request.body.write
    if(request.body.write){
        newUser.read = true
    }else{
        newUser.read = request.body.read
    }

    if (!newUser) {
        response.status(400).json({err: 'User Invalid'});
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
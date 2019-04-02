import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Interview } from './Interview';
import { InterviewDeleted } from './InterviewDeleted';

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    username: string

    @Column()
    password: string
    
    @Column()
    write: boolean

    @Column()
    read: boolean

    @OneToMany(type => Interview, interview => interview.entrevistador)
    interview: Interview[]

    @OneToMany(type => InterviewDeleted, interviewDeleted => interviewDeleted.usuarioExcluidor)
    interviewDeleted: InterviewDeleted[]
}
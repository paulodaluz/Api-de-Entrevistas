import 'reflect-metadata'
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Interview } from './Interview';

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    userName: string

    @Column()
    password: string
    
    @Column()
    write: boolean

    @Column()
    read: boolean

    @OneToOne(type => Interview, interview => interview.entrevistador) // specify inverse side as a second parameter
    @JoinColumn()
    interview: Interview;
}
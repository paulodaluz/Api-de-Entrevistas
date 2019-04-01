import 'reflect-metadata'
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { Interview } from './Interview';

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
}
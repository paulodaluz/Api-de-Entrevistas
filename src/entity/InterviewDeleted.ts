import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, OneToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class InterviewDeleted{
    
    @PrimaryGeneratedColumn()
    id:number
    
    @ManyToOne(type => User, user => user.id)
    @JoinColumn({name: 'entrevistadorID'})
    entrevistador: User;

    @ManyToOne(type => User, user => user.id)
    @JoinColumn({name: 'usuarioExcluidorID'})
    usuarioExcluidor: User;
    
    @Column()
    candidato: string

    @Column()
    statusAvaliacao: string
    
    @Column()
    disponibilidade: string

    @Column()
    pretensao: string

    @Column()
    dataEntrevista: string

    @Column()
    conhecimentoVaga: string

    @Column()
    conhecidos: string

    @Column()
    idade: number

    @Column()
    cidade: string

    @Column()
    mudancaCidade: string

    @Column()
    escolaridade: string

    @Column()
    instituicoes: string

    @Column()
    nivelIngles: number

    @Column()
    empregoAtual: string

    @Column()
    setorPretendido: string

    @Column()
    setorEnquadrado: string

    @Column()
    java: number

    @Column()
    jee: number

    @Column()
    python: number

    @Column()
    ruby: number

    @Column()
    javascript: number

    @Column()
    sql: number

    @Column()
    plsql: number

    @Column()
    htmlCSS: number

    @Column()
    tecnologiasAdd: string

    @Column()
    resumo: string

    @Column()
    contratarPros: string

    @Column()
    contratarContras: string

    @Column()
    observacoes: string

    @CreateDateColumn()
    dataExclusao: string

}
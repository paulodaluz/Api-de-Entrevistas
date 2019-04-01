import 'reflect-metadata'
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class Interview{

    @PrimaryGeneratedColumn()
    id:number

    @OneToOne(type => User, user => user.interview) 
    user: User;

    @Column()
    candidato: string

    @Column()
    statusAvalicao: string
    
    @Column()
    disponibilidade: string

    @Column()
    pretensao: string

    @Column()
    dataEntrevista: string

    @Column()
    conhecimetoVaga: string

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
}
import { Entity,BaseEntity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";

@Entity({name: "exercise"})
export class Exercise extends BaseEntity{
    @PrimaryColumn({ type: "int", unsigned: true ,})
    id!: number;

    @Column({type: "varchar",length:255})
    type!: string;

    @Column({type:"int",  nullable: true, default: null})
    locationId!: number

    @Column({type:"int",  nullable: true, default: null})
    userId!: number

    @Column({type:"double"})
    duration!: number;

    @Column({type:"double"})
    calories!: number;
    
    @CreateDateColumn()
    created_at!: Date;

    @CreateDateColumn()
    updated_at!: Date;

    @Column({type: "datetime", nullable: true})
    deleted_at!: Date;
    
    @Column({type: "int"})
    version!: string;

}
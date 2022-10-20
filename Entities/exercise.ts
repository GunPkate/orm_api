import { Entity,BaseEntity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user";
import { Location } from "./location";

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

    // @ManyToOne(()=>User,(E)=>E.id,{nullable:true})
    // @JoinColumn({name: "userId",referencedColumnName:"id"})
    // userId!: User;

    // @ManyToOne(()=>Location,(E)=>E.id,{nullable:true})
    // @JoinColumn({name:"locationId",referencedColumnName:"id"})
    // locationId!: Location;


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
    version!: number;

}
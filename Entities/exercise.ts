import { Entity,BaseEntity, PrimaryColumn, Column } from "typeorm";

@Entity({name: "exercise"})
export class Exercise extends BaseEntity{
    @PrimaryColumn({ type: "int", unsigned: true })
    id!: number;

    @Column({type: "varchar",length:255})
    type!: string;

    @Column({type:"int"})
    locationId!: number

    @Column({type:"int"})
    userId!: number

    @Column({type:"double"})
    duration!: number;

    @Column({type:"double"})
    calories!: number;
    
    @Column({type: "datetime"})
    created_at!: Date;

    @Column({type: "datetime"})
    updated_at!: Date;

    @Column({type: "datetime"})
    deleted_at!: Date;
    
    @Column({type: "int"})
    version!: string;

}
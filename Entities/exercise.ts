import { Entity,BaseEntity, PrimaryColumn, Column } from "typeorm";

@Entity({name: "exercise"})
export class Exercise extends BaseEntity{
    @PrimaryColumn("increment")
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
    
    @Column({type: "datetime",length:6})
    created_at!: string;

    @Column({type: "datetime",length:6})
    updated_at!: string;

    @Column({type: "datetime",length:6})
    deleted_at!: Date;
    
    @Column({type: "int"})
    version!: string;

}
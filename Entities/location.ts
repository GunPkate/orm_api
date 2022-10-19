import { Entity,BaseEntity, PrimaryColumn, Column } from "typeorm";

@Entity({name: "location"})
export class Location extends BaseEntity{
    @PrimaryColumn({ type: "int", unsigned: true })
    id!: number;
    @Column({type:"double"})
    latitude!: number;
    @Column({type:"double"})
    longtitude!: number;
    @Column({type: "varchar",length:255})
    address!: string;
    @Column({type: "varchar",length:255})
    name!: string;
    @Column({type: "datetime"})
    created_at!: string;
    @Column({type: "datetime"})
    updated_at!: string;
    @Column({type: "datetime"})
    deleted_at!: Date;
    @Column({type: "int"})
    version!: string;

}
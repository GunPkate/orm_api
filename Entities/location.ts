import { Entity,BaseEntity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";

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
    @CreateDateColumn()
    created_at!: string;
    @CreateDateColumn()
    updated_at!: string;
    @Column({type: "datetime",default: null})
    deleted_at!: Date;
    @Column({type: "int"})
    version!: number;

}
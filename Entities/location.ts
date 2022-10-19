import { Entity,BaseEntity, PrimaryColumn, Column } from "typeorm";

@Entity({name: "location"})
export class Location extends BaseEntity{
    @PrimaryColumn("increment")
    id!: number;
    @Column({type:"double"})
    latitude!: number;
    @Column({type:"double"})
    longtitude!: number;
    @Column({type: "varchar",length:255})
    address!: string;
    @Column({type: "varchar",length:255})
    name!: string;
    @Column({type: "datetime",length:6})
    created_at!: string;
    @Column({type: "datetime",length:6})
    updated_at!: string;
    @Column({type: "datetime",length:6})
    deleted_at!: Date;
    @Column({type: "int"})
    version!: string;

}
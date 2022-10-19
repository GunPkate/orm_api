import { Entity,BaseEntity, PrimaryColumn, Column } from "typeorm";

@Entity({name: "user"})
export class User extends BaseEntity{
    @PrimaryColumn({ type: "int", unsigned: true })
    id!: number;

    @Column({type: "varchar",length:64})
    firstname!: string;
    @Column({type: "varchar",length:64})
    lastname!: string;
    @Column({type: "varchar",length:16})
    username!: string;
    @Column({type: "varchar",length:128})
    password!: string;
    @Column({type: "varchar",length:255})
    email!: string;
    @Column({type: "datetime"})
    created_at!: Date;
    @Column({type: "datetime"})
    updated_at!: Date;
    @Column({type: "datetime"})
    deleted_at!: Date;
    @Column({type: "int"})
    version!: string;

}
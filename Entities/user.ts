import { Entity,BaseEntity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";

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
    @CreateDateColumn()
    created_at!: Date;
    @CreateDateColumn()
    updated_at!: Date;
    @Column({type: "datetime",default: null})
    deleted_at!: Date;
    @Column({type: "int"})
    version!: string;

}
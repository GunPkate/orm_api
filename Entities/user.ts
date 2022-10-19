import { Entity,BaseEntity, PrimaryColumn, Column } from "typeorm";

@Entity({name: "user"})
export class User extends BaseEntity{
    @PrimaryColumn("increment")
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
    @Column({type: "datetime",length:6})
    created_at!: string;
    @Column({type: "datetime",length:6})
    updated_at!: string;
    @Column({type: "datetime",length:6})
    deleted_at!: Date;
    @Column({type: "int"})
    version!: string;

}
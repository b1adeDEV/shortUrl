import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Url {

    @PrimaryColumn()
    id!: string

    @Column()
    short_url!: string

    @Column()
    original_url!: string
}
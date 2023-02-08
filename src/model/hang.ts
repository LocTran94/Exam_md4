import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Hang {
    @PrimaryGeneratedColumn()
    idHang : number;
    @Column()
    tenHang : string;
    @Column()
    motaHang : string;

}
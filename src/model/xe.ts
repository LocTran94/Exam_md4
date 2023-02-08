import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Xe {
    @PrimaryGeneratedColumn()
    idXe : number;
    @Column()
    tenXe : string;
    @Column()
    soLuong : number;
    @Column()
    giaXe : number;
    @Column()
    idHang : number;
}
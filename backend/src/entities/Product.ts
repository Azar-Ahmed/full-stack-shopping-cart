import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id!: number;      // <-- add !

    @Column()
    name!: string;    // <-- add !

    @Column("decimal", { precision: 10, scale: 2 })
    price!: number;   // <-- add !

    @Column()
    image!: string;   // <-- add !
}

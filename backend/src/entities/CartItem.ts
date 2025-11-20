import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class CartItem {
    @PrimaryGeneratedColumn()
    id!: number;      // <-- add !

    @ManyToOne(() => Product, { eager: true })
    @JoinColumn({ name: "productId" })
    product!: Product; // <-- add !

    @Column()
    productId!: number; // <-- add !

    @Column()
    quantity!: number; // <-- add !
}

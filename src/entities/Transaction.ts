import {BaseEntity , Column , Entity, PrimaryGeneratedColumn } from "typeorm"
export enum TransactionsTypes {
    DEPOSIT='deposit',
    WITHDRAW = 'withdraw'
}

@Entity("transactions")
export class Transaction extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: "enum",
        enum: TransactionsTypes
    })
    type: string ;

    @Column({
        type:"numeric"
    })
    amount: number 



}
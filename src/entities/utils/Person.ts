import {BaseEntity, Entity,Column , PrimaryGeneratedColumn  } from "typeorm"
@Entity()   // ()--> it include name of the table 
export class Person extends BaseEntity {
 
    @PrimaryGeneratedColumn ()
    id: number


    @Column()
    first_name: string ;


    @Column()
    last_name : string ;


    @Column({
     unique: true                    // This tells that email should be unique
    })
    email:string;


    @Column({
        unique:true,
        length:10
    })
    card_number: string;
    
}
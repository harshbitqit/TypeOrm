import { Entity,Column ,CreateDateColumn, UpdateDateColumn} from "typeorm"
import { Person } from "./utils/Person";

@Entity('banker')   // ()--> it include name of the table 
export class Banker extends Person{                    // This way the client tbale is extending with person  so the client table have all the columns associated with Person
 
    
    @Column({
        unique:true,
        length:10
    })
    employee_number:string

    @CreateDateColumn()
    created_at:Date;


    @UpdateDateColumn()
    updated_at:Date;


}
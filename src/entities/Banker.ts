import { Entity,Column ,CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable} from "typeorm"
import { Person } from "./utils/Person";
import { Client } from "./Client";

@Entity('banker')   // ()--> it include name of the table 
export class Banker extends Person{                    // This way the client tbale is extending with person  so the client table have all the columns associated with Person
    
    @Column({
        unique:true,
        length:10,
    })
    employee_number:string
    

    @ManyToMany(
        ()=> Client,
        {
            cascade: false

        }
    )
    @JoinTable({
        name:"bankers_clients",
        joinColumn:{
            name:"banker",
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name:"client",
            referencedColumnName:"id"
        }
    })
    clients:Client[]

    @CreateDateColumn()
    created_at:Date;


    @UpdateDateColumn()
    updated_at:Date;



    

}




//  Clien_id     Banker_id
//      1            3
//      1            2
//      3            3
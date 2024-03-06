import { Entity,Column , CreateDateColumn, UpdateDateColumn} from "typeorm"
import { Person } from "./utils/Person";

@Entity('client')   // ()--> it include name of the table 
export class Client extends Person {                     // This way the client tbale is extending with person  so the client table have all the columns associated with Person
 

    @Column({
        type: "numeric"
    })
    balance: number;
     
    
    @Column({
        default:true,
        name:"active"
    })
    is_active: boolean;

    @Column({
        type: "simple-json",
        nullable: true
    })
    additional_info:{
        age:number ;
        hair_color: string
    }

    @Column({
        type:"simple-array",
        default:[]
    })
    family_members:string[];


    @CreateDateColumn()
    created_at:Date;


    @UpdateDateColumn()
    updated_at:Date;





}
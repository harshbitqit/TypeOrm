import { createConnection } from "typeorm"
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transaction } from "./entities/Transaction";

const main = async () =>{
    try{
    await createConnection({

        type:"postgres",
        host: "localhost",
        port: 5432,
        username: 'postgres' ,
        password: 'MsitDpps12@#',
        database:'TypeOrm',
        entities:[Client,Banker,Transaction],
        synchronize: true            // IT specifies the changes to be madde visible in the Postgre
    })
    console.log("Connected to Postgres");

} catch (error){
console.error("Unable to connect to Postgres")
throw new Error("Unable to connect to db")
}


}

main()
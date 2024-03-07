import { createConnection } from "typeorm"
import express from "express";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transaction } from "./entities/Transaction";
import { createClientRouter } from "./routes/create_client";
import { createBankerRouter } from "./routes/create_banker";
import {createTransactionRouter} from "./routes/create_transaction"
import { connectBankerToClientRouter } from "./routes/connect_banker_to_client";
import { deleteClientRouter } from "./routes/delete_client";


const app = express();

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
    app.use(express.json());
    
    app.use(createClientRouter);
    app.use(createBankerRouter);
    app.use(createTransactionRouter);
    app.use(connectBankerToClientRouter);
    app.use(deleteClientRouter);


    app.listen(8080,()=>{
        console.log("Now running on port 8080")
    })

} catch (error){
console.error("Error is " , error);
throw new Error("Unable to connect to db")
}


}

main()
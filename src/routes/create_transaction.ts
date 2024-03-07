import express from "express"
import { Transaction, TransactionsTypes } from "../entities/Transaction"
import { Client } from "../entities/Client"

const router= express.Router()

router.post("/api/client/:clientId/transaction",async(req,res)=>{
    const {clientId}=req.params;

    const {type, amount } = req.body;

    const client = await Client.findOne({where:{id:parseInt(clientId,10)}});


    if(!client){
        return res.json({
            msg:"clientnot found"
        })
    }

    const transaction = Transaction.create({
        amount,
        type,
        client 
    });

    await transaction.save();

    if(type === TransactionsTypes.DEPOSIT){
        client.balance= client.balance + amount;
    }
    else if (type=== TransactionsTypes.WITHDRAW){
        client.balance=client.balance - amount;
    }

    await client.save();

    return res.json({
        msg:"Transaction added"
    })
  
})

export {router as createTransactionRouter}




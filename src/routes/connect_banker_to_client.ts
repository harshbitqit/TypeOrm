import express from "express"
import { Client } from "../entities/Client"
import { Banker } from "../entities/Banker"

const router= express.Router()

router.put("/api/banker/:bankerId/client/:clientId",async(req,res)=>{
    const { bankerId,clientId } =req.params;

    const client = await Client.findOne({where:{id:parseInt(bankerId)}})

    const banker = await Banker.findOne({where:{id:parseInt(bankerId)}})
    
    if(!banker || !client){
        return res.json({
            msg:"Banker or client not found"
        })
    }

    banker.clients = [ 
        client 
    ]

    await banker.save();

    return res.json({
          msg:"Banker connected to client"
    })

})   

//     if (banker && client) {
//         banker.clients = [client];
//         await banker.save();
//         return res.json({
//             msg: 'banker connected to client',
//         });
//     } else {
//         return res.json({
//             msg: 'banker or client not found',
//         });
//     }



export { router as connectBankerToClientRouter }




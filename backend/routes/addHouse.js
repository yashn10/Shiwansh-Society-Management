const express = require('express');
const router = express.Router();
const NewHouse=require("../models/NewHouse");


router.post("/NewHouse",async(req,res)=>{
    const{SocityNo,BlockNo,HouseType,Details}=req.body;

    try{
        const NewHouseEntry=new NewHouse(req.body);
        const saved=await NewHouseEntry.save();
        if(saved){
            res.status(201).json({message:"data submited for new house"});
        }else{
            res.status(404).json({error:"error occur in new house filed "})
        }


    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"server error occur"});
    }
})
module.exports=router;
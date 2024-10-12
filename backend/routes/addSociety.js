const express = require('express');
const router = express.Router();


const AddSociety=require("../models/AddSociety");

router.post("/create",async(req,res)=>{
    const{SocityName,NoOfHouse,Address,city,pincode}=req.body;

    try{
        const society=new AddSociety(req.body);
        const saved=await society.save();
        if(saved){
            res.status(201).json({message:"data submited for society"});

        }else{
            res.status(404).json({error:"error occur in society field"});

        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"server error occur",error});
    }
});
module.exports=router;
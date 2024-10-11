const mongoose=require("mongoose");

const NewHouseSchema=new mongoose.Schema({
    
    SocityNo:{
        type: Number,
        require: true
    },

    BlockNo:{
        type:Number,
        require:true
    },

    HouseType:{
        type:Number,
        require:true
    },
    Details:{
        type:String,
        require:true,
    }



    
});
module.exports=mongoose.model("NewHouse",NewHouseSchema);
const mongoose=require("mongoose");

const SocietySchema=new mongoose.Schema({
    SocityName:{
        type: String,
        require: true
    },

     NoOfHouse:{
        type:Number,
        require:true
    },

    Address:{
      type:String,
      require:true
    },

    city:{
        type:String,
        require:true
    },

    pincode:{
        type:String,
        require:true,
        unique:true
    },




    
});
module.exports=mongoose.model("Society",SocietySchema);
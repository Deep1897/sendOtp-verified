const express=require("express");
const mongoose=require("mongoose");

const schemadata= new mongoose.Schema({

   
    email:{
         type:String,
         required:[true, "please enter you email"],
         unique:[true, "email address already taken"],
    },
    verified_otp:{
        type:Number,
        required:[true, "otp is required"],
        
   }
   
    

},{
    timestamps:true,

})


const Models=new mongoose.model("emailverified",schemadata);
module.exports=Models;
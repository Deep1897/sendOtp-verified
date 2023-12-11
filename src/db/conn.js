const mongoose=require("mongoose");
const express=require("express");


const DB='mongodb+srv://softdeep06:IVGdcxoHS0Jurxvi@cluster0.jbophc6.mongodb.net/JWT_Token?retryWrites=true&w=majority'


mongoose.connect(DB,{
    // useNewUrlParser: true,
    // useFindAndModify:false,
}).then(()=>{
    console.log("connection successfull of mongodb atlas")
}).catch((err)=> console.log(err))

// mongoose.connect("mongodb://localhost:27017/Emailverify",{useNewUrlParser: true, 
// useUnifiedTopology: true}).then(()=>{

//     console.log("connection successfull");
// }).catch((e)=>{
//     console.log(e);
// })
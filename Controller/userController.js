const express = require('express');
// const jwt=require("jsonwebtoken");
require("dotenv").config();
const model=require("../src/models/user_model.js")
const app = express();
const transporter=require("../CONFIG/emailConfig.js")
const nodemailer=require("nodemailer");
const path=require("path");
const generateOtp= require("./otpGenerator.js")
// const generateOtp= require("./otpGenerator.js")
const deep=require("../Controller/deep.json")

var cotp=null;
var cmail=null;
const otpCreater=async (req,res)=>{
    const {email}=req.body;

    // -------------------------------------------------------------------------user send otp randomly

    try {
        if(email){

        
            cotp= Number(generateOtp());
            cmail=email;

            let infomail=await transporter.sendMail({
                from:process.env.EMAIL_FROM,
                to:email,
                subject:"password reset otp",
                text:`Your otp is : ${cotp} to reset your password`
            })

            res.send("OTP sent, please check your email")
               




        }else{
            res.send("all fields are mandatory")
        }
        
    } catch (error) {
        res.send({message:'occuring some  error'})
    }

// -------------------------------------------------------------------------------------------user send otp randomly

// -------------------------------------------------------------------------------------------user send otp dinamically



    // try {

    //     if(email){
    //         //  cmail=email;
    //           cotp=generateOtp();

    //          const avail=await model.findOne({email})
    //          if(avail){
    //             const changeinfo=await model.findOne({email});
             
                

    //             let infomail=await transporter.sendMail({
    //                 from:process.env.EMAIL_FROM,
    //                 to:email,
    //                 subject:"password reset otp",
    //                 text:`Your otp is : ${cotp} to reset your password`
    //             })

    //             await model.findByIdAndUpdate(changeinfo._id,{$set:{verified_otp:cotp}});
    //             res.send({message:"OTP sent please check your email"})

    //          }else{
    //             const user= await model.create({
    //                 email,
    //                 verified_otp:cotp
    //                });


    //                let infomail=await transporter.sendMail({
    //                 from:process.env.EMAIL_FROM,
    //                 to:email,
    //                 subject:"password reset otp",
    //                 text:`Your otp is : ${cotp} to reset your password`
    //             })

    //             res.send({message:"OTP sent please check your email"})
    //          }
    
           
    
           
    
            
    //     }else{
    //         res.send({message:"all fields are mandatory"})
    //     }
        
    // } catch (error) {
    //     res.send(error)
    // }


// ------------------------------------------------------------------------------------------------------------- sent otp dinamically
    
}



// ------------------------------------------------------------------------------------verify otp dinamically


// const verifyotp= async (req,res)=>{
//     const {email,otp} = req.body;

//     try {
//         if(email && otp){

//            const getuser= await model.findOne({email});
//            if(getuser==null){

//             res.send({message:"the email is not verified"})

//            }
//            else{

//             if(getuser.email==email && getuser.verified_otp==otp){

//                 res.send({message:"user is verified and valid for registration"});
             
//             }else{
//                 res.send({message:"email or otp is wrong"});
//             }




//             console.log(getuser.email);
//             console.log(getuser.verified_otp);


//            }
           

          



           
//         }else{
//             res.send("all fields are mandatory")
//         }
        
//     } catch (error) {
//         res.send(error)
//     }
    
// }


//--------------------------------------------------------------------------------------verify otp dinamically







// ---------------------------------------------------------------------------------------verify otp randomly



const verifyotp=(req,res)=>{
    const {email,otp} = req.body;

    try {
        if(email && otp){
           if(otp===cotp && cmail==email){
            res.send("user is verified for Register himself")
           }else{
            res.send("please send OTP again on your mail or otp is wrong")
           }
        }else{
            res.send("all fields are mandatory")
        }
        
    } catch (error) {
        res.send(error)
    }
    
}




// --------------------------------------------------------------------------------------------

const getdata=(req,res)=>{

    res.send(deep);
}

module.exports={otpCreater,verifyotp,getdata};
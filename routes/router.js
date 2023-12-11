const express = require('express');
const router = express.Router();
const app=express();
const path=require("path");
const {otpCreater,verifyotp,getdata} =require("../Controller/userController.js")

router.post("/generateotp",otpCreater)
router.post("/verifyotp",verifyotp)
router.get("/getdata",getdata)


module.exports = router;
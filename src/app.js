const express = require('express');
const app = express();
const router = require("../routes/router.js");
require('../src/db/conn.js');
const path= require("path")
const port=process.env.PORT || 3001

const DB='mongodb+srv://softdeep06:IVGdcxoHS0Jurxvi@cluster0.jbophc6.mongodb.net/JWT_Token?retryWrites=true&w=majority'



app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('Public'));



// template_path=path.join(__dirname,"../template/views/")
// console.log("template_path: ",template_path);
// app.use(express.static("public"));
// app.set("view engine","ejs");
// app.set("views",template_path);



app.use("/", router);



app.listen(port,()=>{
    console.log("running at port "+port);
})
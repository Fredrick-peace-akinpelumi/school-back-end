const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require('body-parser');
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true,limit:'50mb'}))
app.use(bodyParser.json({limit:'50mb'}))
const { default: mongoose } = require("mongoose");
const auth = require('./route/auth');

const PORT = process.env.PORT;
const URI = process.env.URI;
app.use('/api', auth)

mongoose.connect(URI).then((connect)=> {
    console.log("Connected to database successfully")
}).catch((err)=> {
    console.log(err.message);
}).finally(()=>{
    app.listen(PORT,()=>{
        console.log("Am listen at port 4000")
    })
})
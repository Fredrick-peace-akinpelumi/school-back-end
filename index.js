const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv').config();

const auth = require('./route/auth');
const songsRoute = require('./route/songsRoute.js');
const commentsRoute = require('./route/commentsRoute.js');


const app = express();



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true,limit:'50mb'}))
app.use(bodyParser.json({limit:'50mb'}))


const PORT = process.env.PORT;
const URI = process.env.URI;


mongoose.connect(URI).then((connect)=> {
    console.log("Connected to database successfully")
}).catch((err)=> {
    console.log(err.message);
}).finally(()=>{
    app.listen(PORT,()=>{
        console.log(`Am listen at port ${PORT}`)
    })
})

app.use('/api', auth)
app.use('/api/songs', songsRoute)
app.use('/api/comments', commentsRoute)
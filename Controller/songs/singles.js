const singleModel = require('../../model/singleCatModel');
const express = require('express');
const {cloudinary }= require('../../utils/cloudinary');


const app = express();


const singles = async(req,res)=>{
    console.log(req.body);
    const uploadRes = await cloudinary.v2.uploader
    .upload(req.body.image,{
        upload_preset:'cover'
    })
    console.log(uploadRes);
    if(uploadRes){
        res.status(200).send({
          success:true,
          message:"upload successful 2005648034"
        })
      }else{
        res.send({ success:false, message:"something went wrong"});
      }
 }

// const singles = async(req, res)=>{
//     try{
//         const fileStr = req.body.data;
//         // const uploadedRes = await cloudinary.uploader.upload(fileStr,{
//         //     upload_preset:'cover'
//         // })
//         const uploadedRes = await cloudinary.v2.upLoader.upload(fileStr)
//         .then((res)=>{
//             upload_preset:'cover'
//         })
//         console.log(uploadedRes);
//         res.json({message:"Uploaded "})
//     } catch(err) {
//         console.log(err);
//         res.status(500).json({err:"Error"})
//     } 
// }

module.exports = {singles}
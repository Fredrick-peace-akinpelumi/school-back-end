const singleModel = require('../../model/singleCatModel');

//UPLOADING SONGS TO THE BACKEND

const uploadSingle=async(req,res)=>{
    const {musicTitle, artist, music, cover} = req.body;
    const single = new singleModel({
        musicTitle,
        artist,
        music,
        cover
    })
    try{
        await single.save();
        res.status(201).json({message: "Song uploaded successfully", single})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

//Getting all songs from the backend

const getAllSongs = async(req,res)=>{
    try{
        const allSongs = await singleModel.find();
        res.status(200).json(allSongs)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}


module.exports = {uploadSingle,getAllSongs}
const epModel = require('../../model/epCatModel')

const uploadEp = async (req, res) => {
    const {epTitle, artist, track, cover, genre} = req.body;
    console.log(req.body)
    const checkTitle = await epModel.findOne({epTitle})
    const checkTracks = await epModel.findOne({track})
    if(!epTitle || !artist || !track || !cover || !genre){
        return res.json({message: "All fields are required"})
    }else if (checkTitle || checkTracks) {
        return res.send({status:false, message:"This EP already exists"}) 
    }else{
        const ep = new epModel({
            epTitle,
            artist,
            track,
            cover,
            genre
        })
        try{
            await ep.save();
            res.status(200).json({message: "EP uploaded successfully", ep})
        }catch(err){
            res.status(500).json({message: err.message})
        }
    }
    
}

    // const getEpSongs = async(req,res)=>{

    //     try{
    //         const allSongs = await epModel.find();
    //         res.status(200).json(allSongs)
    //     }catch(err){
    //         res.status(500).json({message: err.message})
    //     }
    // }

module.exports = {uploadEp}
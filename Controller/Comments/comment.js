const commentModel = require("../../model/commentModel");

const uploadComment = async (req, res, next) => {
    const { Comment,musicId} = req.body;
        //  await commentModel.deleteMany();
    if (!Comment) return res.json({message:"Comment not found"})
    const comments = new commentModel({
        Comment,
        musicId
    })
    try{
        await comments.save();
        res.status(200).json({message:"Comment Sent", comments})
    }catch(err){
        res.status(500).json({message:"Comment Failed"})
    }
}

    const getComment = async (req, res) => {
    
        try{
            const allComments = await commentModel.find({musicId:req.params.musicId});
            res.status(200).json(allComments)
        }catch(err){
            res.status(500).json({message:err.message})
        }
    }

module.exports = {uploadComment,getComment};
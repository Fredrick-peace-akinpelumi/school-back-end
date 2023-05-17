const userModel=require("../../model/userModel");
const jwt=require("jsonwebtoken");

const allUser = async (req, res)=> {
    const users =  await userModel.find({}).sort({createdAt : -1});
    res.json(users)
}


const getCurrentUser=async (req, res)=>{
    const token=req.headers.token;
    const data= await jwt.verify(token,process.env.JWT_KEY)
   return userModel.findById(data.id).then(user=>{
        res.status(200).send({
            success:true,
            message:"User found",
            user
        })
    }).catch(err=>{
        res.status(500).send({
            success:false,
            message:err.message
        })
    })
}

module.exports = { allUser,getCurrentUser}
const userModel = require("../../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  const { username, email, password } = req.body;

  
    const checkEmail = await userModel.findOne({ email})
    
    const checkname = await userModel.findOne({ username})
  // //const checkEmailAndUsername =  userModel.findOne({ $oremail, username }});

  if(checkEmail){
     return res.send({status:false, message:"Email Already Exist"}) 
     
 }else if(checkname){
  return res.send({status:false, message:"Username Already Exist"}) 

 }else{

   bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
     if (err) {
       return res.status(500).json({
         success: false,
         message: "An error occured while hashing",
       });
     }
     const newUser = new userModel({
       username,
       email,
       password: hashedPass,
     });
  
     newUser
       .save()
       .then((user) => {
         console.log(user)
         // checkEmail(req.body.email, res);
         return res.status(200).json({
           success: true,
           message: "User saved successfully",
         });
       })
       .catch((err) => {
         if (err.KeyPattern) {
           return res.status(500).json({
             success: false,
             message: "Email, username and password must be unique",
           });
         }
       });
   });
 }
};

const login = async (req, res) => {
  const {email, password, username} = req.body;
  userModel.findOne({ $or: [{email}, {username}]}).then(user => {
    if(user){
      bcrypt.compare(password, user.password, async function (err, result) {
        if(result){
            const token =await jwt.sign({id:user._id}, process.env.JWT_KEY, {expiresIn: "9999999999h"});
          res.status(200).send({
            success:true,
            message:"Login successful",
            token,
          })
        }else{
          res.send({ success:false, message:"Incorrect password"});
        }
      })
    }else{
      res.send({
        success:false,
        message:"User not found"
      })
    }
  })
}

const followUser= async(req,res)=>{
  const followerId=req.body.followerId
  const followingId=req.body.followingId

  console.log(followerId + followingId)

  
  try{
    const followUser= await userModel.findById(followerId)
    console.log(followUser)
    const followingUser= await userModel.findById(followingId)
    console.log(followingUser)

    if(followUser.followings.includes(followingId)){
      console.log(true)
      await followUser.updateOne({$pull:{followings:followingId}})
      await followingUser.updateOne({$pull:{followers:followerId}})
      res.status(200).json({message:"User Unfollowed"})
    }else{
      console.log(false)
      await followUser.updateOne({$push:{followings:followingId}})
      await followingUser.updateOne({$push:{followers:followerId}})
      res.status(200).json({message:"User followed"})
    }
  } catch(error){
    console.log(error)
  }

}



module.exports = { register, login,followUser };

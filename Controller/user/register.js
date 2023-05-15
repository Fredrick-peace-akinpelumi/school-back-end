const userModel = require("../../model/userModel");
const bcrypt = require("bcrypt");

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
      bcrypt.compare(password, user.password, function (err, result) {
        if(result){
          res.status(200).send({
            success:true,
            message:"Login successful"
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

// const login = async (req, res) => {
//   const { email, password } = req.body;
//   console.log(req.body);
//   const checkEmail = await userModel.findOne({ email });
//   if (checkEmail) {
//     const checkPassword = await userModel.findOne({ password });
//    const isValid= bcrypt.compare(password, checkPassword );
//     if (isValid) {
//         return res.status(200).json({
//             success: true,
//             message: "Login successful",
//         });
//     }else if(!isValid) {
//       return res.status(401).json({
//           success: false,
//           message: "Incorrect password",
//       });
//     }
//   } else {
//     return res.status(401).json({
//       success: false,
//       message: "Incorrect email",
//     });
//   }
// };


module.exports = { register, login };

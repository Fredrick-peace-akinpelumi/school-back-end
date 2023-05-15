const allUser = async (req, res)=> {
    const users =  await userModel.find({}).sort({createdAt : -1});
    res.json(users)
}



module.exports = { allUser}
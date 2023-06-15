const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    followers:[
        {type:mongoose.Schema.Types.ObjectId}
    ],
    followings:[
        {type:mongoose.Schema.Types.ObjectId}
    ]
}, {timestamps:true});
const userModel = mongoose.model('musicalUser', userSchema)

module.exports = userModel;
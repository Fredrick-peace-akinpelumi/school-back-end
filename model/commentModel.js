const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comment = new Schema({
    Comment:{
        type: String,
        required:true
    }
},{timestamps:true})
const commentModel = mongoose.model('comment', comment)
module.exports = commentModel;

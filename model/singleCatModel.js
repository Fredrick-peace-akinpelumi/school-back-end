const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const singleCat = new Schema({
    musicTitle:{
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    music:{
        type: String,
        required: true
    },
    artistId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    cover:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    }
},{timestamps: true})
const singleModel = mongoose.model('singles', singleCat)
module.exports = singleModel;


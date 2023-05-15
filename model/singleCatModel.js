const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const singleCat = new Schema({
    Musictitle:{
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    handleMusic:{
        type: String,
        required: true
    },
    handleCover:{
        type: String,
        required: true
    }
},{timestamps: true})
const singleModel = mongoose.model('singles', singleCat)
module.exports = singleModel;


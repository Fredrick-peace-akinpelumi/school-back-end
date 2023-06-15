const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const epCat = new Schema({
    epTitle:{
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    artistId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    track:{
        type: Array,
        required: true
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
const epModel = mongoose.model('ep', epCat)
module.exports = epModel;


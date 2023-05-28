const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumCat= new Schema({
    albumTitle:{
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
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
const albumModel = mongoose.model('album', albumCat)
module.exports = albumModel;
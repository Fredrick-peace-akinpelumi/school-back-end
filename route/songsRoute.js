const express=require('express');
const { uploadEp } = require('../Controller/songs/extendedPlay.js');

const {uploadSingle, getAllSongs} = require('../Controller/songs/singles.js')
const {uploadAlbum} = require('../Controller/songs/album.js')
const router = express.Router();

router.post('/singles', uploadSingle);
router.get('/singles', getAllSongs);
router.post('/extendedPlay', uploadEp)
router.post('/album', uploadAlbum);

module.exports = router;
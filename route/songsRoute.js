const express=require('express');
const { uploadEp, getEpSongs } = require('../Controller/songs/extendedPlay.js');

const {uploadSingle, getAllSongs} = require('../Controller/songs/singles.js')
const {uploadAlbum, getAlbumSongs} = require('../Controller/songs/album.js')
const router = express.Router();

router.post('/singles', uploadSingle);
router.get('/singles', getAllSongs);
router.post('/extendedPlay', uploadEp)
router.get('/extendedPlay', getEpSongs)
router.post('/album', uploadAlbum);
router.get('/album', getAlbumSongs)

module.exports = router;
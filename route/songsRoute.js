const express=require('express');
const { uploadEp, getEpSongs } = require('../Controller/songs/extendedPlay.js');

const {uploadSingle, getAllSongs, getASong} = require('../controller/songs/singles.js')
const {uploadAlbum, getAlbumSongs} = require('../Controller/songs/album.js')
const router = express.Router();

router.post('/singles', uploadSingle);
router.get('/singles', getAllSongs);
router.get("/singles/:id", getASong);
router.post('/extendedPlay', uploadEp);
router.get('/extendedPlay', getEpSongs)
router.post('/album', uploadAlbum);
router.get('/album', getAlbumSongs)

module.exports = router;
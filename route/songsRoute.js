const express=require('express');
const { uploadEp } = require('../Controller/songs/extendedPlay.js');

const {uploadSingle, getAllSongs} = require('../controller/songs/singles.js')
const router = express.Router();

router.post('/singles', uploadSingle);
router.get('/singles', getAllSongs);
router.post('/extendedPlay', uploadEp)

module.exports = router;
const express=require('express');

const {uploadSingle, getAllSongs} = require('../controller/songs/singles.js')
const router = express.Router();

router.post('/singles', uploadSingle);
router.get('/singles', getAllSongs);

module.exports = router;
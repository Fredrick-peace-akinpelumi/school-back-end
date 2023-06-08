const express = require('express');
const {uploadComment, getComment }= require('../Controller/Comments/comment.js');
const router = express.Router();

router.post('/comment', uploadComment)
router.get('/comment/:musicId', getComment)

module.exports = router;
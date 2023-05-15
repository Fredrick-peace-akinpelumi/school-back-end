const express = require('express')
const { singles } = require('../Controller/songs/singles')
const {allUser} = require("../controller/user/allUser")
const {register} = require("../controller/user/register")
const {login} = require("../controller/user/register")
const router = express.Router()

router.get(('/'), allUser)

router.post(('/user/register'), register)
router.post(('/user/login'), login)
router.post(('/songs/singles'), singles)

module.exports = router
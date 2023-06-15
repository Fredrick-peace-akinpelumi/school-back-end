const express = require('express')
const {allUser,getCurrentUser} = require("../Controller/user/allUser")
const {register, followUser, login} = require("../Controller/user/register")
//const {login} = require("../controller/user/register")
const router = express.Router()

router.get(('/'), getCurrentUser)

router.post(('/user/register'), register)
router.post(('/user/login'), login)
router.put("/user/follow", followUser)

module.exports = router
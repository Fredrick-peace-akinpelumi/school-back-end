const express = require('express')
const {allUser,getCurrentUser} = require("../controller/user/allUser")
const {register} = require("../controller/user/register")
const {login} = require("../controller/user/register")
const router = express.Router()

router.get(('/'), getCurrentUser)

router.post(('/user/register'), register)
router.post(('/user/login'), login)

module.exports = router
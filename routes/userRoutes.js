const express = require('express')
const router = express.Router()
const { registerUser  } = require('../controllers/userController')


router.route('/register_user').post(registerUser)



module.exports = router
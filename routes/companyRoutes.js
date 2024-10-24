const express = require('express')
const router = express.Router()
const { registerCompany} = require('../controllers/companyController')

// Company routes


router.route('/register_company').post(registerCompany)

module.exports = router
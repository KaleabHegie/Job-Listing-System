const express = require('express')
const router = express.Router()
const { registerCompany , updateCompanyProfile} = require('../controllers/companyController')
const { validateCompanyAdmin } = require('../middleware/validateTokenHandler')

// Company routes


router.route('/register_company').post(registerCompany)
router.route('/update_company/:id').put( validateCompanyAdmin , updateCompanyProfile)


module.exports = router
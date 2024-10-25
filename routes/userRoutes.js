const express = require('express')
const router = express.Router()
const { registerUser ,  updateProfile  } = require('../controllers/userController')
const { validateCandidate } = require('../middleware/validateTokenHandler')


router.route('/register_user').post(registerUser)
router.route('/update_profile').put( validateCandidate , updateProfile)



module.exports = router
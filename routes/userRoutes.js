const express = require('express')
const router = express.Router()
const {getAllUsers , registerUser , updateUser , deleteUser , getSingleUser } = require('../controllers/userController')


// User routes
router.route('/get_all_users').get(getAllUsers)

router.route('/register_user').post(registerUser)

router.route('/get_single_user:id').get(getSingleUser)

router.route('/update_user:id').put(updateUser)

router.route('/delete_user:id').delete(deleteUser)




module.exports = router
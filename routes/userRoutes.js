const express = require('express')
const router = express.Router()
const {getAllUsers , register , updateUser , deleteUser , getSingleUser } = require('../controllers/userController')


router.route('/').get(getAllUsers)

router.route('/').post(register)

router.route('/:id').get(getSingleUser)

router.route('/:id').put(updateUser)

router.route('/:id').delete(deleteUser)

module.exports = router
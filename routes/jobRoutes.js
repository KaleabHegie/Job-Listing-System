const express = require('express')
const router = express.Router()
const {getAllJobs , createJob , updateJob , deleteJob , getSingleJob} = require('../controllers/jobController')

router.route('/').get(getAllJobs)

router.route('/').post(createJob)

router.route('/:id').get(getSingleJob)

router.route('/:id').put(updateJob)

router.route('/:id').delete(deleteJob)

module.exports = router
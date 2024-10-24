const express = require('express')
const router = express.Router()
const {getAllJobs , createJob , updateJob , deleteJob , getSingleJob } = require('../controllers/jobController');
const { validateAdmin } = require('../middleware/validateTokenHandler');


router.route('/all_jobs').get(validateAdmin, getAllJobs);

router.route('/create_job').post(createJob)

router.route('/get_single_job/:id').get(getSingleJob)

router.route('/update_job/:id').put(updateJob)

router.route('/delete_job/:id').delete(deleteJob)





module.exports = router
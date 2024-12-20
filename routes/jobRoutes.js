const express = require('express')
const router = express.Router()
const {getAllJobs , createJob , updateJob , deleteJob , getSingleJob, searchJobs } = require('../controllers/jobController');
const { validateAdmin, validateCompanyAdmin } = require('../middleware/validateTokenHandler');



router.route('/').get(searchJobs);

router.route('/all_jobs').get(getAllJobs);

router.route('/create_job').post(validateCompanyAdmin , createJob)

router.route('/single_job/:id').get(getSingleJob)

router.route('/update_job/:id').put(validateCompanyAdmin,updateJob)

router.route('/delete_job/:id').delete(validateCompanyAdmin , deleteJob)





module.exports = router
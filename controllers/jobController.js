const asyncHandler = require('express-async-handler')


//@desc Get all jobs
//@route GET /api/jobs
//@access Public
const getAllJobs = asyncHandler( async (req, res) => {
     res.status(200).json({message : 'Get all jobs'})
})

//@desc Create a job
//@route POST /api/jobs
//@access Public
const createJob = asyncHandler( async (req, res) => {
    console.log(req.body)
    const {company , position} = req.body
    if (!company || !position) {
        res.status(400)
        throw new Error('Please provide company and position')
    }
    res.status(200).json({message : 'Create a job'})
})

//@desc Get a single job
//@route GET /api/jobs/:id
//@access Public
const getSingleJob = asyncHandler( async (req, res) => {
    res.status(200).json({message : `Single job  ${req.params.id}`})
})


//@desc Update a job
//@route PUT /api/jobs/:id
//@access Public
const updateJob = asyncHandler( async (req, res) => {
    res.status(200).json({message : `Update job ${req.params.id}`})
})


//@desc Delete a job
//@route DELETE /api/jobs/:id
//@access Public
const deleteJob = asyncHandler( async (req, res) => {
    res.status(200).json({message : `Delete job ${req.params.id}`})
})






module.exports = {  
    getAllJobs,
    createJob,
    updateJob,
    deleteJob,
    getSingleJob
}
const asyncHandler = require('express-async-handler')
const Jobs = require('../Models/jobModel');
const Users = require('../Models/userModel');

//@desc Get all jobs
//@route GET /api/jobs
//@access Public
const getAllJobs = asyncHandler(async (req, res) => {
    const jobs = await Jobs.find();
    res.status(200).json({
        message: 'Get all jobs',
        data: jobs 
    });
});



//@desc Create a job
//@route POST /api/jobs
//@access Public
const createJob = asyncHandler(async (req, res) => {
    const userId = req.user._id; 
    const {
        company,
        title,
        description,
        vacancy,
        experience,
        skills,
        sector,
        position
    } = req.body;


    if (!company || !title || !description || !vacancy || !experience || !skills || !sector || !position) {
        res.status(400);
        throw new Error('Please provide all required fields');
    }


    const user = await Users.findById(userId); // Fetch the user by their ID
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const isCompanyValid = user.recruiters.includes(company);
    if (!isCompanyValid) {
        res.status(403);
        throw new Error('You are not authorized to post a job for this company');
    }

    const newJob = await Jobs.create({
        company,
        title,
        description,
        vacancy,
        experience,
        skills,
        sector,
        position,
        createdBy: userId 
    });

    res.status(201).json({
        id: newJob._id,
        company: newJob.company,
        title: newJob.title,
        description: newJob.description,
        vacancy: newJob.vacancy,
        experience: newJob.experience,
        skills: newJob.skills,
        sector: newJob.sector,
        position: newJob.position,
        status: newJob.status,
        createdBy: newJob.createdBy
    });
});






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
    getSingleJob,
}


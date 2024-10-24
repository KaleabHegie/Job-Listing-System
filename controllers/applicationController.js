const asyncHandler = require('express-async-handler');
const Application = require('../models/applicationModel');
const Jobs = require('../models/jobModel');
const Candidates = require('../models/candidateModel');

// Create a new application
const createApplication = asyncHandler(async (req, res) => {
    const user_id = req.user.id
    const {  job_id, coverLetter } = req.body;

    const job = await Jobs.findById(job_id);
  

    const candidate = await Candidates.findOne({ user_id: user_id });
    const candidate_id = candidate._id
    console.log(job)

    if (!job || !candidate) {
        return res.status(404).json({ message: 'Job or candidate not found' });
    }

    const application = await Application.create({
        candidate_id,
        job_id,
        coverLetter,
    });

    res.status(201).json(application);
});


const getApplication = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const applications = await Application.findById(id)

    res.status(200).json(applications);
});

// Update application status
const updateApplicationStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const application = await Application.findByIdAndUpdate(id, { status }, { new: true });

    if (!application) {
        return res.status(404).json({ message: 'Application not found' });
    }

    res.status(200).json(application);
});

// Delete an application
const deleteApplication = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const application = await Application.findById(id);

    if (!application) {
        return res.status(404).json({ message: 'Application not found' });
    }

    await application.remove();

    res.status(200).json({ message: 'Application deleted successfully' });
});

module.exports = {
    createApplication,
    getApplication,
    updateApplicationStatus,
    deleteApplication
};

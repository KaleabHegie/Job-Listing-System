const asyncHandler = require('express-async-handler')
const Users = require('../models/userModel')
const Company = require('../models/companyModel'); 
const Candidate = require('../models/candidateModel');
const Recruiter = require('../models/recruiterModel')



//@desc Create a company
//@route POST /api/company
//@access Public
const registerCompany = asyncHandler(async (req, res) => {
    const { 
        name, 
        about, 
        address, 
        city, 
        country, 
        website, 
        logo, 
        slogan, 
        email, 
        phone, 
        since, 
        recruiters 
    } = req.body;

    // Validate required fields
    if (!name || !about || !address || !city || !country || !website || !logo || 
        !slogan || !email || !phone || !since || !recruiters) {
        res.status(400);
        throw new Error('Please provide all required fields');
    }

    // Check if company with the same name or email already exists
    const existingCompany = await Company.findOne({ name });
    if (existingCompany) {
        res.status(400);
        throw new Error('Company already exists with this name');
    }

    const existingEmail = await Company.findOne({ email });
    if (existingEmail) {
        res.status(400);
        throw new Error('Company already exists with this email');
    }


    // Create a new company instance
    const newCompany = new Company({
        name,
        about,
        address,
        city,
        country,
        website,
        logo,
        slogan,
        email,
        phone,
        since,
        recruiters // this should be an array of user IDs
    });

    // Save the company to the database
    const savedCompany = await newCompany.save();

    await Users.updateMany(
        { _id: { $in: recruiters } }, // Find users whose IDs are in the recruiters array
        { $set: { role: 'companyAdmin' } } // Set their role to companyAdmin
    );

    await Candidate.deleteMany({ user_id: { $in: recruiters } });

    await Recruiter.insertMany(
        recruiters.map(userId => ({ user_id: userId, company_id: savedCompany._id }))
    );

    // Respond with the created company details (excluding sensitive information)
    res.status(201).json({
        id: savedCompany._id,
        name: savedCompany.name,
        email: savedCompany.email,
        phone: savedCompany.phone,
        // You can add more fields as necessary
    });
});

module.exports = {
    registerCompany,
};


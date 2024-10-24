const asyncHandler = require('express-async-handler');
const Users = require('../models/userModel');
const Candidate = require('../models/candidateModel');
const bcrypt = require('bcrypt');



//@desc register  users
//@route register /api/users/register_user
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { first_name, last_name, user_name, date_of_birth, email, phone, address, city, country, password, photo , role } = req.body;

    if (!first_name || !last_name || !user_name || !date_of_birth || !email || !phone || !password || !photo) {
        res.status(400);
        throw new Error('Please provide all required fields');
    }

    const userAvailable = await Users.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error('User already exists');
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
        first_name,
        last_name,
        user_name,
        date_of_birth,
        email,
        phone,
        address,
        city,
        country,
        password: hashPassword,
        photo,
        role
    });

    if (user.role === 'candidate' ) {
        await Candidate.create({
            user_id: user._id,
            skill: []  // Assuming no skills provided during registration; can be updated later
        });
    }

    res.status(201).json(user);  // Using 201 for successful resource creation
});


module.exports = {  
    registerUser
}
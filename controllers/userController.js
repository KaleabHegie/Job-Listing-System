const asyncHandler = require('express-async-handler')
const Users = require('../Models/userModel')
const bcrypt = require('bcrypt')


//@desc Create a user
//@route POST /api/users
//@access Public
const register = asyncHandler( async (req, res) => {
    const {first_name , last_name , user_name , date_of_birth , email , phone , address , city , country , password , photo} = req.body
    if (!first_name || !last_name || !user_name || !date_of_birth || !email || !phone) {
        res.status(400)
        throw new Error('Please provide first name , last name , user name , date of birth , email , phone')
    }
    const userAvailable = await Users.findOne({email})
    if (userAvailable) {
        res.status(400)
        throw new Error('User already exist')
    }

    const hashPassword = await bcrypt.hash(password, 10)
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
        password : hashPassword,
        photo,
    })
    res.status(200).json(user)
})



//@desc Get all users
//@route GET /api/users
//@access Public
const getAllUsers = asyncHandler( async (req, res) => {
    const users = await Users.find()
    res.status(200).json(users)
})





//@desc Get a single user
//@route GET /api/users/:id
//@access Public
const getSingleUser = asyncHandler( async (req, res) => {
    const user = await Users.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    res.status(200).json(user)
})




//@desc Update a user
//@route PUT /api/users/:id
//@access Public
const updateUser = asyncHandler( async (req, res) => {
    
    const user = await Users.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    
    
    res.status(200).json(updatedUser)
})




//@desc Delete a user
//@route DELETE /api/users/:id
//@access Public
const deleteUser = asyncHandler( async (req, res) => {    
    const user = await Users.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    
    await user.deleteOne()
    res.status(200).json(user)
})






module.exports = {  
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    register

}
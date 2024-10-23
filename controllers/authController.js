const asyncHandler = require('express-async-handler')
const Users = require('../Models/userModel')
const jwt = require('jsonwebtoken')


const login = asyncHandler( async (req, res) => {
    const {email , password} = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error('Please provide email and password')
    }
    const user = Users.findOne({email})
    if(user && (await bcrypt.compare(password , user.password))) {
        const accessToken = jwt.sign({
            user : {
                username : user.username,
                email : user.email,
                id : user.id
            }
        } , process.env.ACCESS_TOKEN_SECRET , {
            expiresIn : '15m'
        })
    }
    else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})


module.exports = {
    login
}


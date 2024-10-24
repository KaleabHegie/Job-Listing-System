const express = require('express')
const mongoose = require('mongoose')
const { use, options } = require('../routes/jobRoutes')




const userSchema = new mongoose.Schema({
    first_name : {
        type : String,
        required : [true , 'Please provide first name'], 
    },
    last_name : {
        type : String,
        required : [true , 'Please provide last name'], 
    },
    user_name : {
        type : String,
        required : [true , 'Please provide user name'], 
    },
    date_of_birth : {
        type : Date,
        required : [true , 'Please provide date of birth'],
    },
    email : {
        type : String,
        required : [true , 'Please provide email'],
    },
    phone : {
        type : String,
        required : [true , 'Please provide phone number'],
    },
    address : {
        type : String,
        required : [true , 'Please provide address'],
    },
    city : {
        type : String,
        required : [true , 'Please provide city'],
    },
    country : {
        type : String,
        required : [true , 'Please provide country'],
    },
    password : {                
        type : String,
        required : [true , 'Please provide password'],
    },
    photo : {
        type : String,
        required : [true , 'Please provide photo'],
    },
    role : {
        type : String,
        enum : ['companyAdmin' , 'candidate' ,  'admin'],
         default : 'candidate'
    }
})



const skillSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true , 'Please provide skill'],
    },
    description : {
        type : String,
        required : [true , 'Please provide description'],
    }
})

const candidateSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true , 'Please provide user'],
        ref : 'User'
    },
    skill : {
        type : [skillSchema],
        required : [true , 'Please provide skill'],
    },
})
    

const educationSchema = new mongoose.Schema({
    candidate_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true , 'Please provide Candidate'],
        ref : 'Candidate'
    },
    institution_name : {
        type : String,
        required : [true , 'Please provide institution_name'],
    },
    degree : {
        type : String,
        enum: ['SSC', 'HSC', 'BCS', 'BS', 'MS', 'Mphil', 'PhD'],
        required : [true , 'Please provide degree'],
    },
    field_of_study : {
        type : String,
        required : [true , 'Please provide field of study'],
    },
    from : {
        type : Date,
        required : [true , 'Please provide from'],
    },
    to : {
        type : Date,
        required : [true , 'Please provide to'],
    },
    grade : {
        type : String,
        required : [true , 'Please provide grade'],
    },
    description : {
        type : String,
        required : [true , 'Please provide description'],
    }
})

const experienceSchema = new mongoose.Schema({
    candidate_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true , 'Please provide Candidate'],
        ref : 'Candidate',
    },
    company_name : {
        type : String,
        required : [true , 'Please provide company name'],      
    },
    position : {
        type : String,  
        required : [true , 'Please provide position'],
    },
    from : {    
        type : Date,
        required : [true , 'Please provide from'],
    },
    to : {
        type : Date,
        required : [true , 'Please provide to'],
    },
    description : {
        type : String,
        required : [true , 'Please provide description'],
    }
})


const certificateSchema = new mongoose.Schema({
    candidate_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true , 'Please provide Candidate'],
        ref : 'Candidate'
    },
    name : {
        type : String,
        required : [true , 'Please provide name'],
    },
    description : {
        type : String,
        required : [true , 'Please provide description'],
    },
    date : {
        type : Date,
        required : [true , 'Please provide date'],
    },
    issuing_organization : {
        type : String,
        required : [true , 'Please provide organization'],
    },
    document : {
        type : String,
        required : [true , 'Please provide document'],
    }
})


const personalProjectSchema = new mongoose.Schema({
    candidate_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true , 'Please provide Candidate'],
        ref : 'Candidate'
    },
    name : {
        type : String,
        required : [true , 'Please provide name'],
    },
    description : {
        type : String,
        required : [true , 'Please provide description'],
    },
    link : {
        type : String,
        required : false,
    }
})


const languageSchema = new mongoose.Schema({
    candidate_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true , 'Please provide Candidate'],
        ref : 'Candidate'
    },
    name : {
        type : String,
        required : [true , 'Please provide name'],
    },
    level : {
        type : String,
        required : [true , 'Please provide level'],
    }
})



const companySchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'Please provide name'],
    },
    about : {
        type : String,
        required : [true , 'Please provide about'],
    },
    address : {
        type : String,
        required : [true , 'Please provide address'],
    },
    city : {
        type : String,
        required : [true , 'Please provide city'],
    },
    country : {
        type : String,
        required : [true , 'Please provide country'],
    },
    website : { 
        type : String,
        required : [true , 'Please provide website'],
    },
    logo : {
        type : String,  
        required : [true , 'Please provide logo'],
    },
    slogan : {
        type : String,
        required : [true , 'Please provide slogan'],
    },
    email : {
        type : String,
        required : [true , 'Please provide email'],
    },
    phone : {
        type : String,
        required : [true , 'Please provide phone'],
    },
    since : {
        type : Date,
        required : [true , 'Please provide since'],
    },
    recruiters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide recruiters'],
    }]
})


    
    

module.exports = mongoose.model('Users' , userSchema)
module.exports = mongoose.model('Candidate' , candidateSchema)
module.exports = mongoose.model('Education' , educationSchema)
module.exports = mongoose.model('Experience' , experienceSchema)
module.exports = mongoose.model('Certificate' , certificateSchema)
module.exports = mongoose.model('PersonalProject' , personalProjectSchema)
module.exports = mongoose.model('Language' , languageSchema)
module.exports = mongoose.model('Company' , companySchema)

const e = require('express')
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
    skill : {
        type : [skillSchema],
        required : [true , 'Please provide skill'],
    },
    user : {
        type : userSchema,
        required : [true , 'Please provide user'],
    }
})
    

const educationSchema = new mongoose.Schema({
    institution_name : {
        type : String,
        required : [true , 'Please provide institution_name'],
    },
    degree : {
        type : String,
        options : ['SSC' , 'HSC' , 'BCS' , 'BS' , 'MS' , 'Mphil' , 'PhD'],
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
    
    
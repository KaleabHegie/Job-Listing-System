const mongoose = require('mongoose')

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
}, { timestamps: true })
    

module.exports = mongoose.model('Candidate' , candidateSchema)
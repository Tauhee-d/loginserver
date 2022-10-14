const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    hospitalID:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    createdOn:{
        type:Date,
        default:new Date()
    }
})

module.exports = mongoose.model('mDepartment',schema)
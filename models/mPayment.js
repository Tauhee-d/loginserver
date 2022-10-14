const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    hospitalID:{
        type:String,
        required:true,
    },
    patientID:{
        type:String,
        required:true
    },
    treatmentID:{
        type:String,
        required:true
    },
    paid:{
        type:Boolean,
        default:false
    },
    // timeStamp:{
    //     type: Date,
    //     default:Date.now
    // },
        

    // outpatient or inpatient status
    pStatus:{
        type:Number,
        default:""
    },
    
    pReasons:{
        type:String,
        default:""
    },
    // patient paid amount
    pAmounts:{
        type:String,
        default:""
    },
    // timestamps of payments made
    pTimeStamps:{
        type:String,
        default:""
    },
    // patient payment methods
    pPayMethods:{
        type:String,
        default:""
    }
    
}
,{
timestamps:{ createdAt: 'timeStamps'}
}
)
module.exports = mongoose.model('mPayment',schema)
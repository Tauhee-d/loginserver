
const express = require('express')
const router = express.Router()
const modelPayment = require('../models/mPayment')

router.post('/',async(req,res)=>{


    const {_id,hospitalID,patientID,treatmentID,timeStamp} = req.body


        if(!_id || !hospitalID || !patientID || !treatmentID ){
            res.status(200).send({
                error:'payment values are missing'
            })
            return
        }
        const model = new modelPayment({
            _id,
            hospitalID,
            patientID,
            treatmentID,
            // timeStamp:new Date(timeStamp)
        })
        try {
            const insertedData = await model.save(req.body)
            res.status(201).send({
                message:"Success"
            })
        } catch (error) {
            res.send({
                error:error.message
            })
        }

        
        
        
    })
    
    router.get('/',async(req,res)=>{
        try {
            const AllPayment = await modelPayment.find()
            res.status(200).json({
            paymentData:AllPayment
        })
    } catch (error) {
        res.status(500).send({
            error:'error.message'
        })
    }
})




// getting single payment by ID 

router.get('/:paymentID',async(req,res)=>{
    const paymentID = req.params.paymentID
    // const id = req.params.paymentID
    // const hospitalID = req.params.hospitalID
    if(!paymentID){
        res.status(400).send({
            error:"paymentID or hospitalID is null"
        })
        return
    }
    const filter = {_id:paymentID}
    try{
        const payment = await modelPayment.findOne(filter)
        res.status(200).json(payment)
    }catch(err){
        serverError(res,err)
    }
})

// update payment details
router.put('/:paymentID',async(req,res)=>{
    const {paid,pStatus,pReasons,pAmounts,
        pTimeStamps,pPayMethods} = req.body
    if(!paid||!pStatus||!pReasons||!pAmounts||!
        pTimeStamps||!pPayMethods){
        res.status(400).send({
            error:"body values null"
        })
        return
    }

    const filter = {_id:req.params.paymentID}
    const update = {paid,pStatus,pReasons,pAmounts,
        pTimeStamps,pPayMethods}

    try{
        const model = await modelPayment.findOneAndUpdate(filter,update)
        res.status(200).json(model)

    }catch(err){
        serverError(res,err)
    }

})

module.exports = router



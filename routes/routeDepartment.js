const express = require('express')
const router = express.Router()
const modelDepartment = ('../models/mDepartment.js')

router.post('/',async(req,res)=>{
    const {name} = req.body
    if(!name){
      return  res.status(400).send({
            error:"name not found"
        }
        )
    }
    // const id = req.body.id
    // try {
    //     const user = await modelDepartment.
    // } catch (error) {
        
    // }
})

module.exports = router
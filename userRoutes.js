const express=require('express');
const user=require('../models/user')
const router=express.Router();

router.get('/', (req,res)=>{
    res.json({
        message: 'User data is comming'
    })
});

module.exports=router;
const express=require('express');
const router=express.Router();

//@route GET api/auth
//@description Test route
//@Access Public

router.get('/',(req,res)=>{
    res.send('Auth route')
});

module.exports=router;
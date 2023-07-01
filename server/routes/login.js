const express=require('express')
const router=express.Router();
router.use(express.urlencoded({extended:true}))


router.get('/login',(req,res)=>{
    res.send('login page')
})
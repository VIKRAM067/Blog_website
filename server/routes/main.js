const express = require('express');
const router = express.Router();
const asyncHandler = require("express-async-handler");
const post = require('../models/post');

const eg = {
    title:'Welcome to web Development',
    body:'Web developmet is one of the main and best domain in the field.'
}




router.get('',(req,res)=>{
    res.render('index');
    
})

router.get('/about',(req,res)=>{
    res.render('about');
})


module.exports = router;
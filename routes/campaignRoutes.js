const express=require('express');
const router=express.Router();
const campaignControler=require('../controller/campaignController');

router.use('/getCampigns',campaignControler.getCampigns);

router.use('/getCampignById',(req, res, next)=>{
    
    res.send('This is getCampaign');
});

router.use('/addCampign',(req, res, next)=>{
    res.send('This is add campign');
});

router.use('/updateCampign',(req, res, next)=>{
    res.send('This is getCampaign');
});


module.exports=router;
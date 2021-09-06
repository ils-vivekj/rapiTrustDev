const express=require('express');
const router=express.Router();
const candidateController=require('../controller/candidateController');

router.use('/getCandidateByCampaignId',candidateController.getCandidateByCampaignId);

router.use('/getCandidaateDetails',candidateController.getCandidaateDetails);

router.use('/getAllCandidates',candidateController.getAllCandidates);



module.exports=router;
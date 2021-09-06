const Candidate=require('../models/candidateModule');

exports.getCandidateByCampaignId=(req, res, next)=>{
    console.log('I am in getCandidateByCampaignId ')

    
    Candidate.getCandidatesByCampaignId(2)
    .then(([rows, fieldata])=>{
        res.status(200).json(rows);
    })
    .catch(err=>{
        console.log('Some error', err)
        res.status(404).send('Some error');
    });

}


exports.getCandidaateDetails=(req, res, next)=>{
    // console.log('I am in getCandidateByCampaignId ')
    Candidate.getCandidaateDetails(2)
    .then(([rows, fieldata])=>{
        res.status(200).json(rows);
    })
    .catch(err=>{
        console.log('Some error', err)
        res.status(404).send('Some error');
    });

}


exports.getAllCandidates=(req, res, next)=>{
    // console.log('I am in getCandidateByCampaignId ')
    console.log('THis is getall candidate id',req.body.id);//  .body.id
    Candidate.getAllCandidates()
    .then(([rows, fieldata])=>{
        res.status(200).json(rows);
    })
    .catch(err=>{
        console.log('Some error', err)
        res.status(404).send('Some error');
    });

}
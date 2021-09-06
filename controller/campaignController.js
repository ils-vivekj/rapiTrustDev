// router.use('/getCampigns',(req, res, next)=>{
const CampaignModule = require('../models/campaignModule');
exports.getCampigns = (req, res, next) => {
    console.log('I am here');
// CampaignModule.get
    // const title=req.body.title;
    CampaignModule.getAllCampign().then(([rows, fieldata])=>{
        res.status(200).json(rows);
    }).catch(err => { console.log('some erro') ; res.status(200).json(
        {
            
            campigns:[{err:'noDataFound'}]
        }
    )});

    // res.status(200).json({
    //     campaigns:[{name:'Java',description:'This is java campaign'}]
    // });
    // res.send('this is wher i am ');
}

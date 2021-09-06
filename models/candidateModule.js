const dbconnection = require("../utils/dbconnection");

module.exports=class candidate{
    constructor(){

    }

    static getCandidatesByCampaignId(id){
        
        return dbconnection.execute("select * from candidate where campaign_id=?",[id]);
    }

    static getAllCandidates(){
        return dbconnection.execute("select * from candidate ");
    }

    static getCandidaateDetails(id){
        return dbconnection.execute("select * from candidate where id=?",[id]);
    }
}
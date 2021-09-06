const dbconnection = require("../utils/dbconnection");

// const db=require(dbconnection)
const campaigns=[];
module.exports=class Campaign{
    construtor(cName, cDate, cDesc, cActDate, cExpDate, cIsArc, cIsNew){
        this.cName=cName;
        this.cDate=cDate;
        this.cDesc=cDesc;
        this.cActDate=cActDate;
        this.cExpDate=cExpDate;
        this.cIsArc=cIsArc; 
        this.cIsNew=cIsNew;
        
    }

    static save(){
        campaigns.push(this);
    }
    static getAllCampign(){
        return dbconnection.execute("Select * from campaign")
        //  campaigns;
    }
    static getCampignById(){
        return campaigns;
    }
}
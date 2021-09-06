const Eventemitter= require('events');
const uuid=require('uuid');

class Logger extends Eventemitter{
    log(msg){
        this.emit('message' ,{id: uuid.v4, msg})  
    }
}

module.exports=Logger;
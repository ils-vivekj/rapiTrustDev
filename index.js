const Logger= require('./testEvent');

const logger=new Logger();
logger.on('message' , (data)=>{
    console.log('Inside call back', data)
})

logger.log('Hello World');
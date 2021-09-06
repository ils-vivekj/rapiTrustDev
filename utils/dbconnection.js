const connection=require('mysql2');
const connectionPool=connection.createPool({
    host:'localhost',
    user:'root',
    database: 'trusteddev',
    password:'tooroot'
});
module.exports=connectionPool.promise();

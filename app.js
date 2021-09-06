// const http = require('http');
const express =require('express');
const app=express();
const campaignRoute=require('./routes/campaignRoutes');
const candidateRoute=require('./routes/candidateRoute');
// const { response } = require('express');
const bodyParser=require('body-parser');

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())
// app.use(bodyParser.urlencoded({extended : false}))


app.use((req, res, next)=>{
     console.log('I am in app.js', req.url);
    
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
// 

app.use(campaignRoute);
app.use(candidateRoute);

app.use((req, res, next)=>{
    res.status(404).send('Data not found');
})

app.listen(4000);
const express = require('express')
const app = express();

app.get('/api/data',(req,res)=>{
    const apiKey = req.query.apiKey;
    const username = req.query.username;
    const password = req.query.password;
    if(username !== "admin" && password !=="admin" ){
        return res.status(401).send('unauthorized');
    }
    res.send('Welcome to Employee Dashboard');
});

app.get('/api/hr',(req,res)=>{
    const apiKey = req.query.apiKey;
    const username = req.query.username;
    const password = req.query.password;
    if(username !== "admin" && password !=="admin" ){
        return res.status(401).send('unauthorized');
    }
    res.send('Welcome to HR Dashboard');
});

app.get('/api/unauthorized',(req,res)=>{
    const apiKey = req.query.apiKey;
    const username = req.query.username;
    const password = req.query.password;
    if(username !== "admin" && password !=="admin" ){
        return res.status(401).send('unauthorized');
    }
    res.send('Welcome to Unauthorized');
});

app.get('/api/welcome',(req,res)=>{
    const apiKey = req.query.apiKey;
    const username = req.query.username;
    const password = req.query.password;
    if(username !== "admin" && password !=="admin" ){
        return res.status(401).send('unauthorized');
    }
    res.send('Welcome to hello world page');
});

app.listen(3000)
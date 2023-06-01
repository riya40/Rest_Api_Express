const express = require('express')
const app = express();

app.get('/api/data',(req,res)=>{
    const apiKey = req.query.apiKey;
    if(apiKey !== "random_api_key"){
        return res.status(401).send('unauthorized');
    }
    res.send('Data retrieved successfully');
});

app.listen(3000)
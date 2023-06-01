const express= require('express')

const foodModel = require('../model/food')

const app=express();

app.post('/food', async (req,res)=>{
    const food= new foodModel(req.body);
    try{
        await food.save();
        res.send(food);
    }catch(error){
        res.status(500).send(error);
    }
});

app.get('/foods',async(req,res)=>{
    const foods = await foodModel.find({});
    try{
        res.send(foods)
    }catch(error){
        res.status(500).send(error)
    }
});

app.put('/food/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const{name}=req.body;
        const upddatefood =await foodModel.findByIdAndUpdate(id,{name},{new:true});
        res.status(200).send(upddatefood);
    }catch(err){
        res.status(500).send(err);
    }
});

app.patch('/food/:id',async(req,res)=>{
    try{
        await foodModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).send("done");
    }catch(err){
        res.status(500).send(err);
    }
});


app.delete('/food/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        //const{name}=req.body;
        await foodModel.findByIdAndDelete(id);
        res.status(200).send("done");
    }catch(err){
        res.status(500).send(err);
    }
});


module.exports = app;
const express = require('express')

const router = new express.Router();


const connection = require('../db/connection')


router.get('/users/home',(req,res)=>{
    res.send('Inside Router!!!')
})

router.get('/users/allusers',(req,res)=>{
    connection.query("SELECT * from users",(err,result)=>{
        if(err){
            res.status(400).json('No Data Found,Internal Server Error!!')
        }else{
            res.status(200).json(result);
        }

    })

});

router.get("/users/:id",(req,res)=>{
    const{id}=req.params;
    console.log(id);
    connection.query("SELECT * FROM users WHERE id = ?",id,(err,result)=>{
      if(err){
        res.status(422).json("error");
      }else{
        res.status(201).json(result);
      }
    });
  });

module.exports =router;
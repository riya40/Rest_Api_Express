const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const foodRouter = require('./foodroutes/foodroutes')

const app= express();


app.use(cors());
app.use(express.json());
app.use(foodRouter)

mongoose.connect("mongodb+srv://priyanunna20:Azzgif2YKmaMUtdb@cluster0.lxuh1mf.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true , useUnifiedTopology: true })
    .then(()=> console.log('Connected To MongoDB'))
    .catch(error=> console.error('Could not connect to MongoDB ',error));
// app.use(foodRouter)
const port=5000;
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});
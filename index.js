const express = require("express");
const app = express();
const port = 5000;
require("./db/connection");
const router = require("./routes/router");
const cors = require('cors');

app.use(cors());
app.use(router);
app.use(express.json);

app.get("/",(res,req)=>{
    res.send("hello worls");
})

app.listen(port, ()=>{
    console.log("App is running fine")
})
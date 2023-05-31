const mysql = require("mysql2")

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Mysql#12345',
    database:'democrud'
});

connection.connect((err)=>{
    if(err) throw err;
        console.log("database connected succefully")
});
module.exports=connection;

const express = require('express')
const mysql = require('mysql')
require('dotenv').config()
/*const bcrypt = require("bcrypt")*/

const cors = require('cors')


const app = express();

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database: 'web_store'
});
/*
app.get("/",(req, res) =>{
    return res.json("Backend test - test ");
    
})*/

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/insert",(req,res)=>{
    const name = reg.body.name
    const surname = reg.body.surname
    const email = reg.body.email
    const password = reg.body.password

    const sqlRegister="INSERT INTO customer (name, surname, email, password) VALUES (?,?,?,?)";
    db.query(sqlRegister,[name, surname, email, password], (err,result)=>{
        console.log(result);

});
});

/*
app.get('/product',(req,res)=> {
    const sql= "SELECT * FROM product";
    db.query(sql,(error,data)=>{
        if(error) return res.json(error);
        return res.json(data);
    })
})
*/
app.listen(5000,() => {
    console.log("Connected to 5000.")
})
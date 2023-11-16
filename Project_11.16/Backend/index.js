const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
//const pool = require('./database');  // papildyta 11.16
//const bcrypt = require('bcryptjs');

const app = express();

app.use(cors());
app.use(express.json());

const pool = mysql.createConnection({ 
    host: "localhost",
    user: 'root',
    password:'',
    database: 'web_store'
})

app.get('/product',(req,res)=> {
    const sql= "SELECT * FROM product";
    pool.query(sql,(error,data)=>{
        if(error) return res.json(error);
        return res.json(data);
    })
})

app.post('/register',(req,res) => {
    const registerName = req.body.registerName;
    const registerSurname = req.body.registerSurname;
    const registerEmail =req.body.registerEmail;
    const registerPassword =req.body.registerPassword


    
    console.log(registerName, registerSurname, registerEmail, registerPassword);  // registerPassword

    //const salt = bcrypt.genSaltSync(10);  // papildyta 11.16
   // const hash = bcrypt.hashSync(req.body.Password, salt); // papildyta 11.16

    const sqlRegister = "INSERT INTO customer(name, surname, email, password) VALUES (?,?,?,?)" 
    const Values = [registerName, registerSurname, registerEmail, registerPassword]

    pool.query(sqlRegister, Values, (err,res)=> {
        if(err) return res.json(err);
       
              
         })
        })

   
// Login fukcija

app.post("/customer", (req, res) => {
    const loginEmail =req.body.loginEmail;
    const loginPassword =req.body.loginPassword;
    console.log(loginEmail, loginPassword);

    const sqlLogin = "SELECT * FROM customer WHERE email = ? AND password = ?" 
    const Values = [loginEmail, loginPassword]

    pool.query(sqlLogin, Values, (err, result) => {
            if (err) {
                res.send({err:err})
            }
            if (result.length>0){
                    res.send(result);
                } else {
                    res.send({message:"Email, password do not match"});
                }
                
            })
    
})


app.listen(5000,() => {
    console.log("Connected to 5000.")
})

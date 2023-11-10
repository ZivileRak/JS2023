
const express = require('express')
const mysql = require('mysql')
//const bcrypt = require("bcrypt")

const cors = require('cors')


const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database: 'web_store'
})
app.get('/product',(req,res)=> {
    const sql= "SELECT * FROM product";
    db.query(sql,(error,data)=>{
        if(error) return res.json(error);
        return res.json(data);
    })
})


/*const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(req.body.Password, salt);*/

app.post('/register',(req,res) => {
    const registerName = req.body.registerName;
    const registerSurname = req.body.registerSurname;
    const registerEmail =req.body.registerEmail;
    const registerPassword =req.body.registerPassword

    
    console.log(registerName, registerSurname, registerEmail, registerPassword);

    const sqlRegister = "INSERT INTO customer(name, surname, email, password) VALUES (?,?,?,?)"
    const Values = [registerName, registerSurname, registerEmail, registerPassword]

    db.query(sqlRegister, Values, (err,res)=> {
        if(err) return res.json(err);
        /*else res.send({error: null, message: "Client register"})*/
              
         })
        })

        /* if(error) return res.json(error);
         return res.json(data);*/

/*db.query(sqlRegister, Values, (err,result)=> {
            if(err) {
                result.send(err)}
                else{
                    result.send({error: null, message: "Client register"})
                }
         })*/
/*
function addUser(username, hash, callback) {
    const sqlQuery = "INSERT INTO users (username,password) VALUES (?,?)";
    connection.query(sqlQuery, [username, hash], (error, results) => {
        if (error)
            console.log(error);
        else {
            console.log("User is added");
        }
        callback(error);
    })

*/


    
   
     
     /*app.get('/product',(req,res)=> {
    const sql= "SELECT * FROM product";
    db.query(sql,(error,data)=>{
        if(error) return res.json(error);
        return res.json(data);
    })
})*/

   /*db.query(sql,[values],(err, data)=> {
        if(err){
            return res.json("Error");
            }
        return res.json(data);

    })*/

/*
app.get("/",(req, res) =>{
    return res.json("Backend test - test ");  
})*/


app.listen(5000,() => {
    console.log("Connected to 5000.")
})

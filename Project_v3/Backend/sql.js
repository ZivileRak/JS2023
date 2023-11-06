
/*const mysql = require('mysql')
const cors = require('cors')



const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database: 'web_store'
})*/

/*

const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database: 'web_store'
})
app.post('/customer',(req, res)=> {
    const q = "INSERT INTO customer( 'name',  'surname', 'email', 'password' ( values (?)"
    const values = [
        req.body.Name,
        req.body.Surname,
        req.body.Email,
        hash,        

    ] 


const register = (req, res)=>{
*/
    //check if customer already exist
/*const q= "SELECT * FROM customer WHERE email =?";

sql.query(q,[req.body.email], (err, data)=> {
    if (err) return res.json(err)
    if(data.length) return res.status(409).json("User with this email is registered");

 app.post('/customer',(req, res)=> {
    const q
 })

    const q = "INSERT INTO customer( 'name',  'surname', 'email', 'password' ( values (?)"
    const values = [
        req.body.Name,
        req.body.Surname,
        req.body.Email,
        hash,        

    ]*/
   /* sql.query(q,[values], (err,data)=> {
        if (err) return res.json(err);
        return res.status (200).json("User registered")
    })
});

};


/*const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database: 'web_store'
})


app.get("/",(req, res) =>{
    return res.json("Backend test - test ");
    
})

app.get('/product',(req,res)=> {
    const sql= "SELECT * FROM product";
    db.query(sql,(error,data)=>{
        if(error) return res.json(error);
        return res.json(data);
    })

})

app.listen(5000, () => {console.log("Server started on 5000")} )*/


/*
function getTableValues(tablename, callback) {
    const sqlQuery = "SELECT * FROM " + tablename;
    connection.query(sqlQuery, [], (error, results) => {
        if (error) {
            callback(error);
        }
        else {
            callback(null, results);
        }

    })
}*/

/*module.exports = {getTableValues}*/
/*app.listen(5000, () => {console.log("Server started on 5000")} )*/
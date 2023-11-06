const express = require('express')
const mysql = require('mysql')
const bcrypt = require("bcrypt");

const cors = require('cors')
/*const sql = require("./sql");*/

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database: 'web_store'
})


app.post('/web_store',(req,res) => {
    const sql = "INSERT INTO customer( 'name',  'surname', 'email', 'password' ( values (?)";
    const values = [
        req.body.name,
        req.body.surname,
        req.body.email,
        req.body.password
    ]
    db.query(sql,[values],(err, data)=> {
        if(err){
            return res.json("Error");
            }
        return res.json(data);

    })
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

app.listen(8081,() => {
    console.log("Connected to 8081.")
})


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

app.listen(5000, () => {console.log("Server started on 5000")} )

*/




/*
const authRoutes = require("./routes/auth.js")
const customerRoutes = require("./routes/customers.js")
const postRoutes = require("./routes/posts.js")

import authRoutes from "./routes/auth.js"
import customerRoutes from "./routes/customers.js"
import postRoutes from "./routes/posts.js"



app.use(express.json())
app.use("/post", postRoutes)  //atkreipti demesi i si faila
app.use("/auth", authRoutes)  //atkreipti demesi i si faila
app.use("/customer", customerRoutes)


app.listen(5000,() => {
    console.log("Connected to 5000")
})
*/






const express = require('express')
const app = express();
const port = 5000;
const mysql = require('mysql12')
//const bcrypt = require("bcrypt")
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

const pool = mysql.createPool({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'web_store',
    connectionLimit: 10, 
});

const db = pool.promise();

app.use(cors());
app.use(express.json());

app.get('/Product',(req,res)=> {
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

// endpointas, kuris leistų vartotojui pridėti prekę į krepšelį
app.post('/addToCart', (req, res) => {
    const userId = req.body.userId;
    const productId = req.body.productId;
    const quantity = req.body.quantity;

    const sqlAddToCart = "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)";
    const values = [userId, productId, quantity];

    db.query(sqlAddToCart, values, (err, result) => {
        if (err) return res.json(err);
        return res.json({ message: "Product added to the cart" });
    });
});


// "backend" pusėje pridėdu API, siekiant atlikti užklausą į duomenų bazę ir nusiųsti rezultatus į "frontend" pusę
// Endpoint'as, kuris gauna visus produktus iš duomenų bazės
app.get('/products', (req, res) => {
    const sql = "SELECT * FROM product";
    db.execute(sql, (error, data) => {
        if (error) return res.status(500).json({ error: "Internal Server Error" });
        return res.status(200).json(data);
    });
});

// Endpoint'as, kuris įrašo naują produktą į duomenų bazę
app.post('/products', (req, res) => {
    const { name, image, price } = req.body;
    const sql = "INSERT INTO product (name, image, price) VALUES (?, ?, ?)";
    const values = [name, image, price];
    db.query(sql, values, (error, result) => {
        if (error) return res.status(500).json({ error: "Internal Server Error" });
        return res.status(201).json({ message: "Product added successfully" });
    });
});

app.listen(port,() => {
    console.log("Server is running on http://localhost:5000")
})


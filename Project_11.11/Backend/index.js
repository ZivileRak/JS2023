const express = require('express')
const mysql = require('mysql')
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

app.post('/register',(req,res) => {
    const registerName = req.body.registerName;
    const registerSurname = req.body.registerSurname;
    const registerEmail =req.body.registerEmail;
    const registerPassword =req.body.registerPassword

   /* const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.Password, salt);*/
    
    console.log(registerName, registerSurname, registerEmail, registerPassword);  // registerPassword
    const salt = bcrypt.genSaltSync(10); 
    const hash = bcrypt.hashSync(req.body.registerPassword, salt);

    const sqlRegister = "INSERT INTO customer(name, surname, email, hash) VALUES (?,?,?,?)" 
    const Values = [registerName, registerSurname, registerEmail, registerPassword]

    db.query(sqlRegister, Values, (err,res)=> {
        if(err) return res.json(err);
        /*else res.send({error: null, message: "Client register"})*/
              
         })
        })

        /* if(error) return res.json(error);
         return res.json(data);*/

// Login fukcija

app.post("/customer", (req, res) => {
    const loginEmail =req.body.loginEmail;
    const loginPassword =req.body.loginPassword;
    console.log(loginEmail, loginPassword);

    const sqlLogin = "SELECT * FROM customer WHERE email = ? AND password = ?" 
    const Values = [loginEmail, loginPassword]

    db.query(sqlLogin, Values, (err, result) => {
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


// Pridėti prekę į krepšelį
app.post('/addToCart', (req, res) => {
    const { productId, productName, productDescription, price } = req.body;
    const cartItem = { productId, productName, productDescription, price };
    res.json({ message: 'Prekė pridėta į krepšelį', cartItem });
  });
  
  // Gauti krepšelio turinį
  app.get('/getCart', (req, res) => {
    const cartItems = []; // Čia turėtumėte turėti tikrą krepšelio turinį
    res.json(cartItems);
  });
  

app.listen(5000,() => {
    console.log("Connected to 5000.")
})

/* testuojam ar uzdarius ir atidarius matysim ta pati.*/

import {sql} from "../sql.js";
import bcrypt from "bcryptjs";

export const register = (req, res)=>{

    //check if customer already exist
const q= "SELECT * FROM customer WHERE email =?";

sql.query(q,[req.body.email], (err, data)=> {
    if (err) return res.json(err)
    if(data.length) return res.status(409).json("User with this email is registered");

    const salt = bcrypt.genSaltSync(10); // password cript
    const hash = bcrypt.hashSync(req.body.Password, salt);

    const q = "INSERT INTO customer( 'name',  'surname', 'email', 'password' ( values (?)"
    const values = [
        req.body.Name,
        req.body.Surname,
        req.body.Email,
        hash,        

    ]
    sql.query(q,[values], (err,data)=> {
        if (err) return res.json(err);
        return res.status (200).json("User registered")
    })
});

};

export const login = (req, res)=>{
    
}

export const logout = (req, res)=>{
    
}

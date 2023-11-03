

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
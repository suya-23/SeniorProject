const express= require("express");
const app= express();
const mysql= require('mysql');
const cors=require('cors');

app.use(cors())
app.use(express.json());


const db =mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "surveysystem",
    insecureAuth : true

});

app.post('/create',(req,res) => {
    const school= req.body.school;
    const major= req.body.major;
    const interest= req.body.interest;

    const math= req.body.math;
    const science= req.body.science;
    const english= req.body.english;
    const art= req.body.art;
    const history= req.body.history;


db.query(
    "INSERT INTO surveys (school,major,interest,mathinterest,scienceinterest,englishinterest,artinterest,historyinterest) VALUES (?,?,?,?,?,?,?,?)",
    [school,major,interest,math,science,english,art,history],
    (err, results) =>{
        if(err){
            console.log(err)
        }else{
            res.send("Values Inserted")
        }
    }
    
    );

});

app.get("/employees", (req, res) => {
    db.query("SELECT school,major,interest,mathinterest FROM surveys WHERE mathinterest =1311 LIMIT 1 ", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, () =>{

    console.log("bnm,.")
});
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

var higharr=[];
var lowarray=[];

app.post('/create',(req,res) => {
    const school= req.body.school;
    const major= req.body.major;
    const interest= req.body.interest;

    const math= req.body.math;
    const science= req.body.science;
    const english= req.body.english;
    const art= req.body.art;
    const history= req.body.history;



    const sports= req.body.sports;
    const vArt= req.body.vArt;
    const wArt= req.body.wArt;
    const politics= req.body.politics;
    const tech= req.body.tech;
    const film= req.body.film;
    const nature= req.body.nature;
    const reading= req.body.reading;

    const comp= req.body.comp;
    const group= req.body.group;
    const independent= req.body.independent;
    const creative= req.body.creative;
    const visual= req.body.visual;
    const kinesthetic= req.body.kinesthetic;
    const auditory= req.body.auditory;


  


    var arr1 = ["math","science","english","art","history","sports","vArt","wArt","politics","technology","film","nature","reading","comp","group","independent","creative","visual","kinesthetic","auditory"];
    var arr2 = [math,science,english,art,history,sports,vArt,wArt,politics,tech,film,nature,reading,comp,group,independent,creative,visual,kinesthetic,auditory];
   
    
  
    for (let i=0; i < arr2.length; i++) {
      if (arr2[i]>=3){
        higharr.push(arr1[i])
      }else{
        lowarray.push(arr1[i])
      }
    }

    console.log(higharr)
    console.log(lowarray)



// db.query(
//     "INSERT INTO surveys (school,major,mathinterest,scienceinterest,englishinterest,artinterest,historyinterest) VALUES (?,?,?,?,?,?,?,?)",
//     [school,major,math,science,english,art,history],
//     (err, results) =>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send("Values Inserted")
//         }
//     }
    
//     );

});

app.get("/employees", (req, res) => {




  
 

  let sqlstr= "SELECT CourseName,CourseDescription,SemesterAvailable FROM grandtable where "

  for (let i=0; i < higharr.length; i++) {
    console.log(higharr[i])
    sqlstr= sqlstr+"Keywords like '%"
    console.log(sqlstr)

    sqlstr= sqlstr+ higharr[i]
    sqlstr= sqlstr+ "%'  "


    if(i!=higharr.length-1){
      sqlstr= sqlstr+("OR  ")

    }


}
    const sqlstr1= "SELECT CourseName,CourseDescription,SemesterAvailable FROM grandtable where Keywords like '%History%' or  Keywords like '%Painting%' "


    db.query(sqlstr, (err, result) => {
      if (err) {
        console.log(err);
        
      } else {
        res.send(result);
        console.log(sqlstr)

      }
    });
  });

app.listen(3001, () =>{

    console.log("bnm,.")
});
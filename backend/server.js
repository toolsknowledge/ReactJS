//import the modules
//require() function used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const jwt = require("jwt-simple");

//create the rest object
const app = express();
//where "app" is the rest object
//where "app" object used to develop the rest services


//enable the cors policy
app.use(cors());


//set the json as mime type
app.use(express.json());



//create the client
const ashokIT = mongodb.MongoClient;


app.post("/register",(req,res)=>{
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;
    const phoneNumbers = req.body.phoneNumbers;
    const gender = req.body.gender;
    const skills = req.body.skills;
    const address = req.body.address;
    const country = req.body.country;
    const dob = req.body.dob;
    ashokIT.connect("mongodb+srv://admin:admin@03reactjs9am.7kkvt.mongodb.net/forms-database?retryWrites=true&w=majority",
                                                                                                            (err,connection)=>{
            if(err) throw err;
            else{
                const db = connection.db("forms-database");
                db.collection("login_details").insertOne({"fname":fname,
                                                          "lname":lname,
                                                          "email":email,
                                                          "phoneNumbers":phoneNumbers,
                                                          "gender":gender,
                                                          "skills":skills,
                                                          "address":address,
                                                          "country":country,
                                                          "dob":dob,
                                                          "password":password},(err,result)=>{
                        if(err) throw err;
                        else{
                            res.send({"registration":"success"});
                        }
                });                            
            }
    });    
});

let s_token = "";

app.post("/login",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    ashokIT.connect("mongodb+srv://admin:admin@03reactjs9am.7kkvt.mongodb.net/forms-database?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("forms-database");
            db.collection("login_details").find({"email":email,"password":password}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length>0){
                        const token = jwt.encode({"email":email,"password":password},"admin123");
                        s_token = token;
                        res.send({"login":"success","token":token});
                    }else{
                        res.send({"login":"fail"});
                    }
                }
            })
        }
    });
});








//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});

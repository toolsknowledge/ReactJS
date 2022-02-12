//import the modules
//require() function used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const jwt = require("jwt-simple");



//create the rest object
let app = express();


//enable the cors policy
app.use(cors());


//set the json as MIME Type
app.use(express.json());


//create the client object
let ashokIT = mongodb.MongoClient;
//where "ashokIT" is the client object


let server_token = "";


//create the post request
app.post("/login",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@03reactjs9am.7kkvt.mongodb.net/miniproject?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            let db = connection.db("miniproject");
            db.collection("login_details").find({"email":req.body.email,"password":req.body.password}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length>0){
                        //token
                        //converting readable data to unreadable data with custom password called as token
                        let token = jwt.encode({"email":req.body.email,"password":req.body.password},"admin123");
                        server_token = token;
                        res.send({"login":"success","token":token});
                    }else{
                        res.send({"login":"fail"});
                    }
                }
            });
        }
    });
});



//compare the reactjs token with nodejs token
const middleware = (req,res,next)=>{
    let allHeaders = req.headers;
    let react_token = allHeaders.token;
    if(react_token === server_token){
        next();
    }else{
        res.send({"message":"unauthorized user !"});
    }
};



//create the get request
app.get("/products",[middleware],(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@03reactjs9am.7kkvt.mongodb.net/miniproject?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            let db = connection.db("miniproject");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    });
});






//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});
















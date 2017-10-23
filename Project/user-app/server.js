let express = require("express");
let app = express();
const path = require("path");

//Database Connection
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/userSchema');
let UserSchema = new mongoose.Schema({
    fist_name:{type:String,require:true},
    last_name:{type:String,require:true},
    email:{type:String,require:true},
    editable:{type:Boolean,require:true}
})
mongoose.model("User",UserSchema);
let User =mongoose.model("User",UserSchema);


// public _id:number = Math.floor(Math.random()*100),
// public first_name:string="",
// public last_name:string="",
// public email:string="",
// public editable:boolean=false

app.get("/users",(req,res,next)=>{
    console.log("Server");
    res.json([]);
})


let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Static Foldercd 
app.use(express.static(__dirname+'/public/dist'));

//Routes
app.all("*",(req,res,next)=>{
    res.sendfile(path.resolve("./public/dist/index.html"))
})

app.listen(1337);
const express= require('express');
const app = express();
const complaints = require("./routes/complaints");
const user= require("./routes/user");
const mongoose = require("mongoose");
const config  = require("config");

app.use(express.json());//this will allow our service to be able to see/use body request as json

if(!config.get("jwtPrivateKey")) {
    console.log("jwt private key is not defined");
    process.exit(1);
}

app.use("/api/complaint", complaints);
app.use("/api/user",user);

const appPort = process.env.PORT || 3007;
var mongodb=   mongoose.connection;
mongoose.connect("mongodb+srv://ccmsuser:0vvN0PEEMuAnnpNU@cluster0.a4gzt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true })
    .then(()=> console.log('i am connected...'))
    .catch(err => console.error('could not connect',err));

mongodb.on("error", console.error.bind(console,"mongo db connection error"));
mongodb.once("open", function callback(){
    console.log("mongodb+srv://ccmsuser:0vvN0PEEMuAnnpNU@cluster0.a4gzt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" + "mongodb opened")
})
app.listen(appPort);
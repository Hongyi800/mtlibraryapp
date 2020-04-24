require('dotenv').config()

const mongoose = require("mongoose");

// Connect to MongoDB
const uri = "mongodb+srv://hgu3:Ghy123456@cluster0-bmldn.mongodb.net/INFO30005?retryWrites=true&w=majority";

mongoose.connect(uri,
    function(err){
    if(!err){
        console.log('Connected to mongo.');
    }else{
        console.log('Failed to connect to mongo!', err);
    }
});

require("./author");

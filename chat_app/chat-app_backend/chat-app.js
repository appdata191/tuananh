const express = require('express');
const app = express();
const mongoose = require('mongoose');

const url ="mongodb+srv://appdata191:Tuananh0304_@appdata191.qrctotx.mongodb.net/?retryWrites=true&w=majority";
async function connect(){
    try {
        await mongoose.connect(url);
        console.log("connect to mongodb")
    } catch (error){
        console.error(error);
    }
}
connect();

app.listen(3000);
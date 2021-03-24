//Atif Aziz Memon 1812105
const mongoose  = require('mongoose');
const express=require('express');
const bodyParser = require('body-parser');
const student=require('./routes/student.route');


const app=express();

mongoose.connect("mongodb://localhost/Student",{useNewUrlParser:true, useUnifiedTopology:true}).
then(
    ()=>{
        console.log('DB Connected')
    }
).catch(err=>{
    console.log("Cant connect",err)
    process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/students',student);


app.listen(3000,()=>{console.log('Server is running')});
//http:localhost:3000/student


//Atif Aziz Memon

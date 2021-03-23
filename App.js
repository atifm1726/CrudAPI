//Atif Aziz Memon 1812105
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const student=require('./routes/student.route');


app.use('/student',student)

app.listen(8080,()=>{console.log('Server is running on Port 8080')});

//Atif Aziz Memon
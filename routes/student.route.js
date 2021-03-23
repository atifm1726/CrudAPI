//Atif Aziz Memon 1812105
const express=require('express');
const router=express.Router();

const student_controller=require('../controllers/student.controller');

router.get('/test',student_controller.test);

module.exports=router;

//MODULER ROUTER

// const express = require('express');
// const Router = express.Router;
// const router =Router();
const router = require('express').Router();
const cubeController=require('./controllers/cubeController');
const homeController = require('./controllers/homeController');

router.get('/',homeController.getHomepage);
router.get('/about',homeController.getAboutPage);

// app.get('/create',(req,res)=>{
//     res.render('create');
// });
// app.get('/create', cubeController.getCreateCube)
router.get('/create', cubeController.getCreateCube);
router.post('/create',cubeController.postCreateCube);

module.exports=router;

//MODULER ROUTER

// const express = require('express');
// const Router = express.Router;
// const router =Router();
const router = require('express').Router();
const cubeController=require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');

router.get('/',homeController.getHomepage);
router.get('/about',homeController.getAboutPage);
router.get('/404',homeController.getErrorPage);

// app.get('/create',(req,res)=>{
//     res.render('create');
// });
// app.get('/create', cubeController.getCreateCube)
router.get('/create', cubeController.getCreateCube);
router.post('/create',cubeController.postCreateCube);
router.get('/details/:cubeId',cubeController.getDetails);

router.use('/accessory',accessoryController);

module.exports=router;
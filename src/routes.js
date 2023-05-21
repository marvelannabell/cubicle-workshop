
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
router.get('/cubes/create', cubeController.getCreateCube);
router.post('/cubes/create',cubeController.postCreateCube);
router.get('/cubes/:cubeId/details',cubeController.getDetails);
router.get('/cubes/:cubeId/attach',cubeController.getAttachAccessory);
router.post('/cubes/:cubeId/attach',cubeController.postAttachAccessory)

router.use('/accessories',accessoryController);

module.exports=router;

//MODULER ROUTER

// const express = require('express');
// const Router = express.Router;
// const router =Router();
const router = require('express').Router();
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');
const {isAuthenticated}=require('./middlewares/authMiddleware')

router.get('/', homeController.getHomepage);
// router.get('/api', homeController.getApiData);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);


router.use('/',authController);

// app.get('/create',(req,res)=>{
//     res.render('create');
// });
// app.get('/create', cubeController.getCreateCube)
router.get('/cubes/create',isAuthenticated, cubeController.getCreateCube);
router.post('/cubes/create',isAuthenticated, cubeController.postCreateCube);
router.get('/cubes/:cubeId/details', cubeController.getDetails);
router.get('/cubes/:cubeId/edit',cubeController.getEditCube);
router.post('/cubes/:cubeId/edit',cubeController.postEditedCube);
router.get('/cubes/:cubeId/delete',cubeController.getDeleteCube);
router.post('/cubes/:cubeId/delete',cubeController.postDeleteCube);
router.get('/cubes/:cubeId/attach', cubeController.getAttachAccessory);
router.post('/cubes/:cubeId/attach', cubeController.postAttachAccessory);

router.use('/accessories', accessoryController);


module.exports = router;
// const Cube = require('../models/Cube');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const cubeUtils = require('../utils/cubeUtils');

const cubeService = require('../services/cubeService');


// const data = require('../data.json')
//named export
exports.getCreateCube = (req, res) => {
    res.render('create');
    console.log(req.user, "req.user");
};

exports.postCreateCube = async (req, res) => {

    // autorization moved to middleware
    // const token = req.cookies['auth'];
    // if (!token) {
    //     res.redirect('/404');
    // };
    // try {

    //     const decodedToken = await jwt.veryfy(token, config.SECRET);

    // } catch (error) {
    //     console.log(error);
    //     return res.redirect('/404');
    // }



    // console.log(req.body);
    const { name, description, imageUrl, difficultyLevel } = req.body
    try {
        //save cube
        let cube = new Cube({ name, description, imageUrl, difficultyLevel });//need to be destructed to save data correct
        await cube.save();
        //redirect
        res.redirect('/');

    } catch (error) {
        console.log(error.message);
        return res.redirect('/404')
    }


};

exports.getDetails = async (req, res) => {
    const selectedCube = await Cube.findById(req.params.cubeId).populate('accessories').lean()
    // console.log(selectedCube);

    if (!selectedCube) {
        return res.redirect('/404');
    };
    console.log(selectedCube, 'details');
    res.render('cube/details', { selectedCube })
};

exports.getAttachAccessory = async (req, res) => {
    const selectedCube = await Cube.findById(req.params.cubeId).lean()
    // const accessories = await Accessory.find().lean()
    const accessories = await Accessory.find({ _id: { $nin: selectedCube.accessories } }).lean()//$nin = not in


    res.render('cube/attach', { selectedCube, accessories });
};

exports.postAttachAccessory = async (req, res) => {
    // console.log('Im here');
    const selectedCube = await Cube.findById(req.params.cubeId)//the document without .lean()
    const accessoryId = req.body.accessory;//this comes from  <select id="accessory" name="accessory" /> and its value === <option value="{{this._id}}">
    selectedCube.accessories.push(accessoryId);

    await selectedCube.save();

    res.redirect(`/cubes/${selectedCube._id}/details`);
    // console.log(accessoryId);
};

exports.getEditCube = async (req, res) => {
    const selectedCube = await cubeService.getOne(req.params.cubeId);
    const difficultyLevels = cubeUtils.selectDifficultyLevels(selectedCube.difficultyLevel)

    res.render('cube/edit', { selectedCube, difficultyLevels });
}

exports.getDeleteCube = async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId);

    res.render('cube/delete', { cube });
}
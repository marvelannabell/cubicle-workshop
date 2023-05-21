// const Cube = require('../models/Cube');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

// const data = require('../data.json')
//named export
exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = async (req, res) => {
    // console.log(req.body);
    const { name, description, imageUrl, difficultyLevel } = req.body
    //save cube
    let cube = new Cube({ name, description, imageUrl, difficultyLevel });//need to be destructed to save data correct
    await cube.save();
    //redirect
    res.redirect('/');
};

exports.getDetails = async (req, res) => {
    const selectedCube = await Cube.findById(req.params.cubeId).populate('accessories').lean()
    console.log(selectedCube);
    
    if (!selectedCube) {
        return res.redirect('/404');
    };
    res.render('cube/details', { selectedCube})
};

exports.getAttachAccessory = async (req, res) => {
    const selectedCube = await Cube.findById(req.params.cubeId).lean()
    const accessories = await Accessory.find().lean()


    res.render('cube/attach', { selectedCube, accessories });
};

exports.postAttachAccessory = async (req, res) => {
    console.log('Im here');
    const selectedCube = await Cube.findById(req.params.cubeId)//the document without .lean()
    const accessoryId = req.body.accessory;//this comes from  <select id="accessory" name="accessory" /> and its value === <option value="{{this._id}}">
    selectedCube.accessories.push(accessoryId);
    selectedCube.save();
    res.redirect(`/cubes/${selectedCube._id}/details`);
    console.log(accessoryId);
};

// const Cube = require('../models/Cube');
const Cube = require('../models/Cube');

const data = require('../data.json')
//named export
exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = async (req, res) => {
    console.log(req.body);
    const { name, description, imageUrl, difficultyLevel } = req.body
    //save cube
    let cube = new Cube({ name, description, imageUrl, difficultyLevel });//need to be destructed to save data correct
      await cube.save();
    //redirect
    res.redirect('/');
};

exports.getDetails = async(req, res) => {
   const selectedCube = await Cube.findById(req.params.cubeId).lean()
    // let selectedCube = data.cubes.find(x => x.id === selectedCubeId);
    if (!selectedCube) {
        return res.redirect('/404');
    };
    res.render('details', { selectedCube })
}

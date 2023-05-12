const Cube = require('../models/Cube');
const data = require('../data.json')
//named export
exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = (req, res) => {
    console.log(req.body);
    const { name, description, imageUrl, difficultyLevel } = req.body
    //save cube
    let cube = new Cube(name, description, imageUrl, difficultyLevel);//need to be destructed to save data correct
    Cube.save(cube);
    //redirect
    res.redirect('/');
};

exports.getDetails = (req, res) => {
    const selectedCubeId = (req.params.cubeId);
    // console.log(selectedCubeId);
    if (!selectedCubeId) {
        return res.redirect('/404');
    };
    let selectedCube = data.cubes.find(x => x.id === selectedCubeId);
    if (!selectedCube) {
        return res.redirect('/404');
    };
    res.render('details', { selectedCube })
}

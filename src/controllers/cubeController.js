const Cube = require('../models/Cube');
//named export
exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = (req, res) => {
    console.log(req.body);
    const {name, description, imageUrl, difficultyLevel} = req.body
    //save cube
    let cube = new Cube(name, description, imageUrl, difficultyLevel);//need to be destructed to save data correct
    Cube.save(cube);
    //redirect
    res.redirect('/')
}

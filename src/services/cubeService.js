const Cube = require('../models/Cube')

exports.getOne = async (cubeId) => {
 const selectedCube =  await Cube.findById(cubeId).lean();
 return selectedCube
}
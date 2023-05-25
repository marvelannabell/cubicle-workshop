const Cube = require('../models/Cube')

exports.getOne = async (cubeId) => {
    const selectedCube = await Cube.findById(cubeId).lean();
    return selectedCube
};

exports.update = async (cubeId, data) => {
    const selectedCube = await Cube.findByIdAndUpdate(cubeId, data, { runValidators: true }).lean();
    return selectedCube
};

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId).lean();


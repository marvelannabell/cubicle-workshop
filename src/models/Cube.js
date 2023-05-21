const mongoose = require('mongoose');
// const { Schema, model, Types } = require('mongoose');


const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50//chek max length
    },
    imageUrl: {
        type: String,
        required: true,
        //add http validation 
        // match: /^http[s]?:\/\/ /
        validate:{
            validator: function(value){
                return value.startsWith('http://')||value.startsWith('https://')
            },
            message: 'URL is invalid! '
        }
    },
    difficultyLevel: {
        type: Number,
        max: 6,
        min: 1,
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]

});

const Cube = mongoose.model('Cube', cubeSchema);
module.exports = Cube;
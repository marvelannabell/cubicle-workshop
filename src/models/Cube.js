const data = require('../data.json');
const fs = require('fs');
const path = require('path')

class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }

    static save(cube) {
        cube.id = data.cubes[data.cubes.length - 1].id + 1
        console.log(data);
        data.cubes.push(cube);
        const jsonData = JSON.stringify(data, null, 2);//to ad data in json file beauty arranged
        console.log(jsonData);
        fs.writeFileSync(path.resolve(__dirname, '../data.json'), jsonData)
    }
}

module.exports = Cube
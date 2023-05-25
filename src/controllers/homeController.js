// const data = require('../data.json');
const Cube = require('../models/Cube');


exports.getHomepage = async (req, res) => {
    // console.log(req.query);
    const { search, from, to } = req.query;
    let cubes = await Cube.find().lean();//document to pure obj
    // console.log(cubes);
    // console.log('req.query', search);

    //todo use db filtration instead of memory filtering
    if (search) {
        cubes = cubes.filter(x => x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    };
    if (from) {
        cubes = cubes.filter(x => x.difficultyLevel >= from)
    };
    if (to) {
        cubes = cubes.filter(x => x.difficultyLevel <= to)
    };

    res.render('index', { cubes: cubes, search, from, to });
};

exports.getAboutPage = (req, res) => {
    res.render('about');
};

exports.getErrorPage = (req, res) => {
    res.render('404');
};

// app.get('/', (req, res) => {
//     res.render('index');
// });

// app.get('/about', (req, res) => {
//     res.render('about');
// });

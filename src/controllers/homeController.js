const data = require('../data.json');

exports.getHomepage = (req, res) => {
    res.render('index', { cubes: data.cubes });
};

exports.getAboutPage = (req, res) => {
    res.render('about')
}

// app.get('/', (req, res) => {
//     res.render('index');
// });

// app.get('/about', (req, res) => {
//     res.render('about');
// });
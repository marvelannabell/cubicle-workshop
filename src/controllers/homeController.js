exports.getHomepage=(req,res)=>{
   res.render('index');
};

exports.getAboutPage=(req,res)=>{
    res.render('about')
}

// app.get('/', (req, res) => {
//     res.render('index');
// });

// app.get('/about', (req, res) => {
//     res.render('about');
// });

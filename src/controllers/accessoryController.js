const router = require('express').Router();


//url: /accessory/create
router.get('/create', (req, res) => {
    res.render('accessory/create');
});


module.exports = router;

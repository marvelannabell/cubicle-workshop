const router = require('express').Router();
const authService = require('../services/authService');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const token = await authService.login(username, password);
        res.cookie('auth', token,{httpOnly:true});//send cookie to client
        // console.log(token);
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
    res.redirect('/');

});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        return res.status(404).end();
    };

    const existingUser = await authService.getUserByUsername(username);

    if (existingUser) {
        return res.redirect('/404');
    };

    const user = await authService.register(username, password);
    // console.log(user);
    res.redirect('/login');
});
module.exports = router;
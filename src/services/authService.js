const User = require('../models/User');


exports.getUserByUsername = (username) => {
    return User.findOne({ username });
};

exports.register = (username, password) => {
    return User.create({ username, password });
};

exports.login = async (username, password) => {
    //console.log(this);//this points the module, but not global contexet
    const user = await this.getUserByUsername(username);//!!await

    const isValid = await user.validatePassword(password)//!!await
    if (!user || !isValid) { //==(!(user && user.validatePassword(password)))
        throw 'Invalid username or password!';
    };

    return user



};



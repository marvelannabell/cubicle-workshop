const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        nimLength: 3
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Password is too short!']
    }
});
userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

userSchema.method('validatePassword',  function (password) {

    //    const isValid = await bcrypt.compare(password,this.password);
    //    return isValid //===
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

module.exports = User;
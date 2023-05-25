const jwtCallback = require('jsonwebtoken');
const util = require('util');

const jwt = {
    sign: util.promisify(jwtCallback.sign),
    veryfy: util.promisify(jwtCallback.verify),
    //decode: util.promisify(jwtCallback.decode)//we don`t use it now
};

module.exports=jwt;
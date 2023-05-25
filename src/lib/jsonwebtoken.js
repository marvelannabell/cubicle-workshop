const jwtCallback = require('jsonwebtoken');
const util = require('util');

// function promiseSign(payload, secret, options) {
//     const promise = new Promise(function(resolve, reject) {
        // jwtCallback.sign(payload, secret, options, (err, token) => {
        //     if (err) {
        //         return reject(err);
        //     }

        //     resolve(token);
        // });
//     });

//     return promise;
// }

const jwt = {
    sign: util.promisify(jwtCallback.sign),
    verify: util.promisify(jwtCallback.verify),
    //decode: util.promisify(jwtCallback.decode)//we don`t use it now
};

module.exports=jwt;
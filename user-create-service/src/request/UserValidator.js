const { body } = require('express-validator');

module.exports.storeAction = function () {
    return [
        body('name','name must exists').exists(),
        body('name','name must be 3 to 8 charater').isLength({min:3,max:10}),
        body('name','name must contain only letters').matches(/(^[A-Za-z]+$)/),
        body('email','name must exists').exists(),
        body('email','Invalid email format').isEmail(),
        body('phone','phone must be exists').exists(),
        body('phone','phone must be one of local network eg: orange , vodafone ....').matches(/^(01[1205])([0-9]{8})$/),
    ];
}

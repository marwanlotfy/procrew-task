const { validationResult } = require('express-validator');
const User = require('./../Entity/User');
const userRepository = require('./../repositories/UserRepository');


module.exports.store = async ( req, res ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    try {
        await userRepository.persist(
            new User(req.body)
        );
        return res.status(201).json({success:true});
    } catch (err) {
        console.error(err);
        return res.status(500).json({success:false,message:'sorry service is not avilable at this moment try again later'});
    }

};

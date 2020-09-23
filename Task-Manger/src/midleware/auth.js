const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {

    try {
        let token = req.header('Authorization').replace('Bearer ', '');
        let decoded = await jwt.verify(token, 'MyIdentity');
        let user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!user) throw new Error();
        req.user = user;
        req.token=token;
        next();

    }
    catch (e) {
        res.status(401).send('Please authenticate');
    }
}


module.exports = auth;
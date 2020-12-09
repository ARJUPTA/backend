require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.Jwt_Key);
        req.userdata = decoded;
    } catch (error) {
        return res.status(401).json({
            message: 'Auth Failed'
        });
    }
    next();
};
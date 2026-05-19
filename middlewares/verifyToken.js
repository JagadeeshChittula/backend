const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next)=>{

    const bearerHeader = req.headers.authorization;

    if(!bearerHeader){

        return res.status(401).send("token missing");
    }

    const token = bearerHeader.split(" ")[1];

    try {

        jwt.verify(token,"secretkey");

        next();

    } catch (error) {

        console.log(error);

        return res.status(401).send("Invalid token");
    }
}

module.exports = verifyToken;
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/keys.js')

const authentication = async(req, res, next) => {
    try {
        // creamos un token con la info del header
        const token = req.headers.authorization;
        // verificamos que dicho token coincide con el secreto
        const payload = jwt.verify(token, jwt_secret);
        // buscamos el usuario con la id que nos aporta el token
        const user = await User.findOne({ _id: payload._id, tokens: token });
        if (!user) {
            return res.status(401).send({ message: 'No estas autorizado' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error)
        return res.status(500).send({ error, message: 'Ha habido un problema con el token' })
    }
}
module.exports = { authentication }
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {

    try {

        const token = req.headers.authorization;
        // console.log(token);

        const decoded = jwt.verify(token, 'food-key');
        // console.log(decoded);

        if (decoded) {
            req.body.userId = decoded.user_id; // creating relationship here

            next();
        }

    } catch (error) {
        res.send(error.message)

    }
}







module.exports = auth;
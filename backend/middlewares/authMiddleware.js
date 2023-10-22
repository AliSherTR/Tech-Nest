const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401); // Unauthorized if token is not provided

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden if token is invalid

        req.user = user; // Store the user data in the request object for further use
        next();
    });
};

module.exports = authenticateToken;

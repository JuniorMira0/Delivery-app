const jwt = require('jsonwebtoken');
require('express-async-errors');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const secret = await JWT_SECRET();

    const decodeToken = jwt.verify(token, secret);

    req.user = decodeToken;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

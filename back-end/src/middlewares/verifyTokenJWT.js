const jwt = require('jsonwebtoken');
const fs = require('fs');
require('express-async-errors');

const JWT_SECRET = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const secret = JWT_SECRET;

    const { id } = jwt.verify(token, secret);

    res.locals.user = { id };

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

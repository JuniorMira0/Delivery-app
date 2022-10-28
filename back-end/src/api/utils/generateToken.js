const jwt = require('jsonwebtoken');
require('express-async-errors');

const { JWT_SECRET } = process.env;

const JWT_CONFIG = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = async (email) => {
  try {
     const token = jwt.sign({ email }, JWT_SECRET, JWT_CONFIG);
     return token;
  } catch (error) {
    console.log(error);
    return error;
  }
};
  
module.exports = generateToken;
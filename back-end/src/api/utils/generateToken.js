const jwt = require('jsonwebtoken');
const fs = require('fs');
require('express-async-errors');

const JWT_CONFIG = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key", "utf-8');

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
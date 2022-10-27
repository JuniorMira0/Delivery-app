const express = require('express');
const loginRoutes = require('../routes/loginRoute');
require('express-async-errors');

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);

app.use((err, _req, res, _next) =>
  res.status(err.code || 500).json({ message: `${err.message}` }));

module.exports = app;

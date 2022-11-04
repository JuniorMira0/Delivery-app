const express = require('express');
require('express-async-errors');
const cors = require('cors');
const loginRoute = require('../routes/loginRoute');
const productsRouter = require('../routes/productsRouter');
const registerRoute = require('../routes/registerRoute');
const customerRoutes = require('../routes/customerRoutes');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/login', loginRoute);
app.use('/products', productsRouter);
app.use('/register', registerRoute);
app.use('/customer', customerRoutes);
app.use(express.static('public'));

app.use((err, _req, res, _next) =>
  res.status(err.code || 500).json({ error: `${err.message}` }));

module.exports = app;

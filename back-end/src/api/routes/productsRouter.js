const express = require('express');
const jwt = require('../middlewares/jwt');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', jwt, productsController.getAll);
router.get('/:id', jwt, productsController.getById);

module.exports = router;

const express = require('express');
const verifyTokenJWT = require('../middlewares/verifyTokenJWT');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', verifyTokenJWT, productsController.getAll);
router.get('/:id', verifyTokenJWT, productsController.getById);

module.exports = router;

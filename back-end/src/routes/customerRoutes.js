const { Router } = require('express');
const customerController = require('../controllers/customerController');
const verifyToken = require('../middlewares/verifyTokenJWT');

const router = Router();

router.get('/', customerController.getAllSales);
router.post('/', verifyToken, customerController.createSale);

module.exports = router;

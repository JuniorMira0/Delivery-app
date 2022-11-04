const { Router } = require('express');
const customerController = require('../controllers/customerController');
const verifyTokenJWT = require('../middlewares/verifyTokenJWT');

const router = Router();

router.get('/orders', verifyTokenJWT, customerController.getAllOrders);
router.get('/orders/:orderId', verifyTokenJWT, customerController.getOrder);

module.exports = router;

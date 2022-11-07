const { Router } = require('express');
const customerController = require('../controllers/customerController');
const verifyTokenJWT = require('../middlewares/verifyTokenJWT');

const router = Router();

router.get('/orders', verifyTokenJWT, customerController.getAllOrders);
router.get('/orders/:orderId', verifyTokenJWT, customerController.getOrder);
router.post('/orders', verifyTokenJWT, customerController.createSale);
router.put('/status', verifyTokenJWT, customerController.changeStatus);

module.exports = router;

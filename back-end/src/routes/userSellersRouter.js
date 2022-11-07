const { Router } = require('express');
const userSellersController = require('../controllers/userSellersController');
const verifyTokenJWT = require('../middlewares/verifyTokenJWT');
const customerController = require('../controllers/customerController');

const router = Router();

router.get('/getSellers', userSellersController.getUserSalles);

router.get('/orders', verifyTokenJWT, userSellersController.getAllOrders);

router.get('/orders/:orderId', verifyTokenJWT, customerController.getOrder);

router.put('/status', userSellersController.changeStatus);

module.exports = router;

const { Router } = require('express');
const userSellersController = require('../controllers/userSellersController');

const router = Router();

router.get('/getSellers', userSellersController.getUserSalles);

module.exports = router;

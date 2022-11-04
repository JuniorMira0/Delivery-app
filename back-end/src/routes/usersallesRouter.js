const { Router } = require('express');
const loginController = require('../controllers/userController');

const router = Router();
router.get('/', loginController.getUserSalles)
module.exports = router;

const { Router } = require('express');
const loginController = require('../controllers/loginController');

const router = Router();

router.post('/', loginController.create);

module.exports = router;

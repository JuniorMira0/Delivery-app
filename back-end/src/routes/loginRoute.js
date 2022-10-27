const { Router } = require('express');
const loginController = require('../controllers/loginController');

const router = Router();

router.get('/health', (_req, res) => {
  res.status(200).json({ message: '/login Online' });
});

router.post('/', loginController.login);

module.exports = router;

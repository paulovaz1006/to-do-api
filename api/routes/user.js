const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/UserController');
const userController = new UserController();

router.get('/user', userController.registerUser);

module.exports = router;
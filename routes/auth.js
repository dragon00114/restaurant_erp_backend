const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');
router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/protected', authMiddleware.authentication, authController.protected);
router.post('/update', authController.profileUpdate);
router.get('/get-users', authController.fetchUserList);
router.post('/reset-password', authController.resetPassword);
router.get('/myaccount', authController.isAuthenticated);


module.exports = router;
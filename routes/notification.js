const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const notificationController = require('../controllers/notificationController');


router.post('/',authMiddleware.isAdmin, notificationController.saveNotification);

module.exports = router;
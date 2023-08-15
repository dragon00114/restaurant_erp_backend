const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const reportController = require('../controllers/reportController');


router.get('/sales', reportController.salesReport);
router.get('/membership', reportController.membershiReport);


module.exports = router;
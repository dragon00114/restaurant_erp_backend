const express = require('express');
const router = express.Router();

const couponController = require('../controllers/couponController');

router.post('/', couponController.generateCouponCode);


module.exports = router;
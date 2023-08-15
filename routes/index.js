const express = require('express');
const router = express.Router();


// auth
const authRoutes = require('./auth');
router.use('/auth', authRoutes);

// generate qr code
const generateQRRoute = require('./generate-qr');
router.use('/generate-qr/:websiteUrl', generateQRRoute);

// coupon code
const coupon = require('./couponRoutes');
router.use('/coupon', coupon );

// order
const order = require('./order');
router.use('/menu', order);

// bannner
const popUpBannner = require('./banner');
router.use('/banner', popUpBannner);

// report
const report =  require('./report');
router.use('/report', report);

// transaction
const transaction = require('./transaction');
router.use('/transaction', transaction);

// notification
const notify = require('./notification');
router.use('/notify', notify);


module.exports = router;


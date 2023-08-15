const express = require('express');
const router = express.Router();

const generateQRcode = require('../controllers/generateQRcode');

router.get('/', generateQRcode.generateQR);

module.exports = router;






const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Define the route to create a new transaction record
router.post('/', transactionController.createTransaction);


module.exports = router;
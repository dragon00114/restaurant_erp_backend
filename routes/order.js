const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const orderController = require('../controllers/orderController');

router.post('/', authMiddleware.isAdmin, orderController.addMenu);
router.delete('/:id', authMiddleware.isAdmin, orderController.removeMenu);
router.put('/:id', authMiddleware.isAdmin, orderController.editItem);
router.post('/item', authMiddleware.isAdmin, orderController.addItem);
router.delete('/item/:id', authMiddleware.isAdmin, orderController.removeItem);
router.put('/item/:id', authMiddleware.isAdmin, orderController.editItem);


module.exports = router;
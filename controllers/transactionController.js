const Transaction = require('../models/transaction');
// Controller function to create a new transaction record
const createTransaction = async (req, res) => {
    try {
        const { userId, amount, product, from, to,  } = req.body;
        // Create a new transaction record
        const transaction = await Transaction.create({ userId, amount });

        res.status(201).json({ transaction });
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createTransaction,
};
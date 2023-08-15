const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
}, { timestamps: true } );

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
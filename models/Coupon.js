const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    code: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['reusable', 'one-time'],
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  }, {timestamps : true});

 module.exports = mongoose.model('Coupon', couponSchema);
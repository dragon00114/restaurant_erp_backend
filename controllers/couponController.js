const { v4: uuidv4 } = require('uuid');
const Coupon = require('../models/Coupon');

const generateCouponCode =  async (req, res) => {
    try {
      const { type, user_id } = req.body;
      const code = uuidv4();

      // Create a new coupon
      const coupon = new Coupon({ code, type, user_id });
      await coupon.save();

      res.status(201).json(coupon);
    } catch (error) {
      console.error('Error generating coupon', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  // Get all coupons by user_id
  const getCouponAll  =  async (req, res) => {
    try {
      const { user_id } = req.params;
      const coupons = await Coupon.find({ user_id });

      res.status(200).json(coupons);
    } catch (error) {
      console.error('Error getting coupons', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  module.exports = {
    generateCouponCode,
    getCouponAll
  }